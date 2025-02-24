import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Owner {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @OneToMany(() => Car, (car) => car.owner)
    @Field(() => [Car])
    cars: Car[];
}
