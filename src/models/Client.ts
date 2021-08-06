import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('clients')
export default class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    telephone: string;

    @Column()
    address: string;

    @Column()
    number: number;

    @Column()
    complement: string;

    @CreateDateColumn()
    updated_At: Date;

    @UpdateDateColumn()
    created_At: Date;
}
