import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Car } from "./entities/car.entity";

@Resolver("cars")
export class CarsResolver {
    constructor(private readonly carsService: CarsService) {}

    @Query(() => [Car])
    findAllCar() {
        return this.carsService.findAll();
    }

    @Query(() => Car)
    findOneCar(@Args("id",{type:()=>ID}) id: number) {
        return this.carsService.findOne(+id);
    }

    @Mutation(() => Car)
    createCar(@Args("createCar") createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Mutation(() => Car)
    updateCar(
        @Args("id") id: number,
        @Args("updateCar") updateCarDto: UpdateCarDto
    ) {
      try {
        
        return this.carsService.update(+id, updateCarDto);
      } catch (error) {
        return error.message
      }
    }

    @Mutation(() => Number)
    removeCar(@Args("id", { type: () => ID }) id: number) {
      try {
        return this.carsService.remove(+id);
      } catch (error) {
        return error.message
      }
    }
}
