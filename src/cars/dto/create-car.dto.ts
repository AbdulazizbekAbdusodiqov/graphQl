import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateCarDto {
    @Field({ nullable: true })
    model: string;
    @Field()
    color: string;
    @Field()
    year: string;
}
