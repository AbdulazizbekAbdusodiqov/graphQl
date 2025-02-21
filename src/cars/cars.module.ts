import { Module } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Car } from "./entities/car.entity";
import { CarsResolver } from "./cars.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([Car])],
    controllers: [CarsController],
    providers: [CarsService, CarsResolver],
})
export class CarsModule {}
