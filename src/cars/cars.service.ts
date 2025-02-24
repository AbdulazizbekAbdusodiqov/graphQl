import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "./entities/car.entity";
import { Repository } from "typeorm";
import { Owner } from "src/owner/entities/owner.entity";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepo: Repository<Car>
  ) {}

  create(createCarDto: CreateCarDto) {
    return this.carRepo.save(createCarDto);
  }
  
  createOwner(createCarDto: CreateCarDto, owner:Owner) {
    const newCar = this.carRepo.create({...createCarDto, owner})
    return this.carRepo.save(newCar);
  }

  findAll() {
    return this.carRepo.find({relations:["owner"]});
  }

  findOne(id: number) {
    return this.carRepo.findOneBy({ id });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.findOne(id)
    if(!car){
      // throw new BadRequestException("Car not found")
      return {error : "not found"}
    }
    // await this.carRepo.update(id,updateCarDto);

    return this.carRepo.preload({id, ...updateCarDto});
  }

  async remove(id: number) {
    if(!await this.findOne(id)){
      // throw new BadRequestException("Car not found")
      return {error : "not found"}
    }
    await this.carRepo.delete({ id });
    return id;
  }
}
