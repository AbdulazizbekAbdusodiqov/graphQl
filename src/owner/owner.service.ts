import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { Car } from 'src/cars/entities/car.entity';

@Injectable()
export class OwnerService {
    constructor(
      @InjectRepository(Owner) private readonly ownerRepo: Repository<Owner>
    ) {}

  create(createOwnerDto: CreateOwnerDto) {
    return this.ownerRepo.save(createOwnerDto)
  }

  findAll() {
    return this.ownerRepo.find({relations:["car"]})
  }

  findOne(id: number) {
    return this.ownerRepo.findOneBy({id})
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto) {
    await this.ownerRepo.update(id, updateOwnerDto)
    return this.findOne(id) 
  }

  async remove(id: number) {
    return this.ownerRepo.delete({id})
  }
}
