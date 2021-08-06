import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Establishment from '../models/Establishment';
import EstablishmentRespository from '../repositories/EstablishmentRespository';

const establishmentRouter = Router();

establishmentRouter.post('/', async (req, res) => {
    try {
        
    
    const repo = getRepository(Establishment);
    const response = await repo.save(req.body);

    return res.status(201).json(response);
    } catch (error) {
        return console.log('erro: ', error.message);
    }
});

establishmentRouter.get('/', async (req, res) => {
    try {
        const repo = getRepository(Establishment);
        const response = await repo.find();
    
        return res.status(201).json(response);
        } catch (error) {
            return console.log('erro: ', error.message);
        }
});

establishmentRouter.get('/:establishment', async (req, res) => {
    try {
        const { establishment } = req.params;
        console.log('params: ', establishment)
        const repo = getCustomRepository(EstablishmentRespository);
        const response = await repo.findByName(establishment);
    
        return res.status(201).json(response);
        } catch (error) {
            return console.log('erro: ', error.message);
        }
});

export default establishmentRouter;