import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Car {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    model: string;

    @Field()
    @Column()
    color: string;

    @Field()
    @Column()
    year: string;

    @Field()
    @CreateDateColumn()
    createAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}
