import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateCarDto {
    @Field({ nullable: true })
    model?: string;

    @Field({ nullable: true })
    color?: string;

    @Field({ nullable: true })
    year?: string;
}
