import { OwnerService } from "./owner.service";
import { CreateOwnerDto } from "./dto/create-owner.dto";
import { UpdateOwnerDto } from "./dto/update-owner.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Owner } from "./entities/owner.entity";

@Resolver("owner")
export class OwnerResolver {
    constructor(private readonly ownerService: OwnerService) {}

    @Query(() => [Owner])
    findAllOwners() {
        return this.ownerService.findAll();
    }

    @Query(() => Owner)
    findOneOwner(@Args("id", { type: () => ID }) id: string) {
        return this.ownerService.findOne(+id);
    }

    @Mutation(() => Owner)
    createOwner(@Args("createOwnerDto") createOwnerDto: CreateOwnerDto) {
        return this.ownerService.create(createOwnerDto);
    }

    @Mutation(() => Owner)
    updateOwner(
        @Args("id", { type: () => ID }) id: string,
        @Args("updateOwnerDto") updateOwnerDto: UpdateOwnerDto
    ) {
        return this.ownerService.update(+id, updateOwnerDto);
    }

    @Mutation(() => Number)
    removeOwner(@Args("id", { type: () => ID }) id: string) {
        return this.ownerService.remove(+id);
    }
}
