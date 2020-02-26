import {} from "class-validator";
import {BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
class getData extends BaseEntity {
    @Column({type: "text"})
    currency_pair: string;
    
    @Column({type: "double precision"})
    timestamp: number;
    
    @Column({type: "double precision"})
    last: number;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default getData;