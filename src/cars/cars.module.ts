import { Module } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Car } from "./entities/car.entity";
import { CarsResolver } from "./cars.resolver";
import { Owner } from "src/owner/entities/owner.entity";
import { OwnerResolver } from "src/owner/owner.resolver";
import { OwnerService } from "src/owner/owner.service";

@Module({
    imports: [TypeOrmModule.forFeature([Car, Owner])],
    controllers: [CarsController],
    providers: [CarsService, CarsResolver, OwnerResolver, OwnerService],
    exports:[CarsService]
})
export class CarsModule {}
