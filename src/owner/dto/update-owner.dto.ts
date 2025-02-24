import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateOwnerDto {
    @Field({nullable:true})
    name?: string;
}
