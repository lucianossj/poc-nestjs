import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    cod_contact: number;

    @Column()
    name: string;

}