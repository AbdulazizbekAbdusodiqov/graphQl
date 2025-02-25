import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Customer {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @OneToMany(()=>Order, (order)=>order.customer)
    @Field(()=>[Order])
    orders:Order[]
    
}
