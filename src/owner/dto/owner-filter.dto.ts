import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class OwnerFilterDto {
    @Field({ nullable: true })
    search?: string;

    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => Boolean, { nullable: true })
    sort?: boolean;
}
