import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Car } from "./entities/car.entity";
import { OwnerService } from "src/owner/owner.service";

@Resolver("cars")
export class CarsResolver {
    constructor(
        private readonly carsResolver: CarsService,
        private readonly ownerResolver: OwnerService
    ) {}

    @Query(() => [Car])
    findAllCar() {
        return this.carsResolver.findAll();
    }

    @Query(() => Car)
    findOneCar(@Args("id", { type: () => ID }) id: number) {
        return this.carsResolver.findOne(+id);
    }

    @Mutation(() => Car)
    async createCar(
        @Args("createCar") createCarDto: CreateCarDto,
        @Args("ownerId", { type: () => ID }) ownerId: number
    ) {
        const owner = await this.ownerResolver.findOne(ownerId);
        return this.carsResolver.createOwner(createCarDto, owner!);
    }

    @Mutation(() => Car)
    updateCar(
        @Args("id") id: number,
        @Args("updateCar") updateCarDto: UpdateCarDto
    ) {
        try {
            return this.carsResolver.update(+id, updateCarDto);
        } catch (error) {
            return error.message;
        }
    }

    @Mutation(() => Number)
    removeCar(@Args("id", { type: () => ID }) id: number) {
        try {
            return this.carsResolver.remove(+id);
        } catch (error) {
            return error.message;
        }
    }
}
