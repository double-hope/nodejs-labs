import { Request, Response } from 'express';
import {client} from '..';
import {redisClient} from "..";
import { GoodsDto } from '../dto';
import { Good } from '@prisma/client';

class Goods {

    constructor() {}

    public async _getAllGoods(req: Request, res: Response) {
        const data = await redisClient
                            .get('goods')
                            .catch((err) => console.log(err));

        if(!data) {
            const goods = await client.good.findMany();
            await redisClient.setEx('goods', 3600, JSON.stringify(goods));
            await res.json(goods);
        }
        else 
            await res.json(JSON.parse(data));
    }
    
    public async _getGood(req: Request, res: Response) { 
        const data = await redisClient
                            .get('goods')
                            .catch((err) => console.log(err));

        if(!data) {
            var good = await client.good.findUnique({
                where: {
                    id: +req.params.id,
                }
            });
        }
        else {
            const goods: Good[] = JSON.parse(data);
            var good = goods.find((good) => good.id === +req.params.id) ?? null;
        }
        
        if(!good)
            return res.status(404).json({'message': `ID ${req.params.id} was not found`});
            
        res.json(good);
    }

    public async _createNewGood(req: Request, res: Response) {
        const newGood = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }

        if(!newGood.name || !newGood.price || !newGood.description)
            return res.status(400).json({'message': 'Name, price and description are required'});

        await client.good.create({
            data: newGood,
        })
        
        const goods = await client.good.findMany();
        await redisClient.setEx('goods', 3600, JSON.stringify(goods));
        res.status(201).json(goods);
    }

    public async _updateGood(req: Request, res: Response) {
        const good = await client.good.findUnique({where: {id:+req.body.id}})

        if(!good)
            return res.status(404).json({'message': `ID ${req.body.id} was not found`});
        
        if(req.body.name) {
            await client.good.update({
                where:{
                    id: +req.body.id,
                },
                data:{
                    name: req.body.name,
                }
            })
        }
        if(req.body.price) {
            await client.good.update({
                where:{
                    id: +req.body.id,
                },
                data:{
                    price: +req.body.price,
                }
            })
        }
        if(req.body.description){
            await client.good.update({
                where:{
                    id: +req.body.id,
                },
                data:{
                    description: req.body.description,
                }
            })
        }

        const goods = await client.good.findMany();
        await redisClient.setEx('goods', 3600, JSON.stringify(goods));
        res.json(goods);
    }

    public async _deleteGood(req: Request, res: Response) {
        const good = await client.good.findUnique({where:{id:+req.body.id}});
        
        if(!good)
            return res.status(404).json({'message': `ID ${req.body.id} was not found`});

        await client.good.delete({
            where: {
                id: +req.body.id,
            }
        })

        const goods = await client.good.findMany();
        await redisClient.setEx('goods', 3600, JSON.stringify(goods));
        res.json(goods);
    }
}

export { Goods };