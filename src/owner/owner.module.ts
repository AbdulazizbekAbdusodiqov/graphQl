import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Car } from 'src/cars/entities/car.entity';
import { OwnerResolver } from './owner.resolver';
import { CarsService } from 'src/cars/cars.service';

@Module({
  imports:[TypeOrmModule.forFeature([Owner, Car])],
  controllers: [OwnerController],
  providers: [OwnerService, OwnerResolver, CarsService],
  exports:[OwnerService]
})
export class OwnerModule {}
