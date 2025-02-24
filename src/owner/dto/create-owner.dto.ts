import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOwnerDto {
    @Field()
    name:string
}
