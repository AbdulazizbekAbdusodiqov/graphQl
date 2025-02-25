import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import { Customer } from "src/customer/entities/customer.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Order {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    product: string;

    @Field()
    @Column()
    price: number;

    @ManyToOne((type) => Customer, (customer) => customer.orders, {
        nullable: true,
        onDelete: "SET NULL",
    })
    @Field((type)=>Customer, {nullable:true})
    customer?: Customer;
}
