import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owner/entities/owner.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
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

    @ManyToOne((type)=>Owner, (owner)=>owner.cars, {
        nullable: true,
        onDelete:"SET NULL"
    })
    @Field((type)=>Owner, {nullable:true})
    owner?:Owner

    @Field()
    @CreateDateColumn()
    createAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}
