import { EntityRepository, Repository } from "typeorm";
import Establishment from "../models/Establishment";

@EntityRepository(Establishment)
export default class EstablishmentRespository extends Repository<Establishment>{
    public async findByName(name: string): Promise<Establishment[]>{
        return this.find({
            where: {
                name
            }
        })
    }
}