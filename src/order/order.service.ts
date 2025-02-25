import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateOrderInput } from "./dto/create-order.input";
import { UpdateOrderInput } from "./dto/update-order.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { DeepPartial, Repository } from "typeorm";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private readonly orderRepo: Repository<Order>
    ) {}

    create(createOrderInput: CreateOrderInput) {
        return this.orderRepo.save(createOrderInput as DeepPartial<Order>)
    }

    findAll() {
        return this.orderRepo.find()
    }

    findOne(id: number) {
        return this.orderRepo.findOne({where:{id}, relations:["Customer"]})
    }

    async update(id: number, updateOrderInput: UpdateOrderInput) {
      const order = await this.findOne(id)
      if(!order){
      throw new BadRequestException("Order not found")
      }
      return this.orderRepo.preload({...updateOrderInput, id}) 
    }

    async remove(id: number) {
      if(!await this.findOne(id)){
        return {error : "not found"}
      }
      await this.orderRepo.delete({id})
      return id
    }
}
