import { Injectable } from "@nestjs/common";
import { CreateCustomerInput } from "./dto/create-customer.input";
import { UpdateCustomerInput } from "./dto/update-customer.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./entities/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepo: Repository<Customer>
    ) {}
    create(createCustomerInput: CreateCustomerInput) {
        return this.customerRepo.save(createCustomerInput);
    }

    findAll() {
        return this.customerRepo.find({relations:["order"]});
    }

    findOne(id: number) {
        return this.customerRepo.findOne({ where: { id },relations:["order"] });
    }

    async update(id: number, updateCustomerInput: UpdateCustomerInput) {
        await this.customerRepo.update(id, updateCustomerInput);
        return this.findOne(id);
    }

    remove(id: number) {
        return this.customerRepo.delete(id);
    }
}
