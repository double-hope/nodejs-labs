import { Request, Response } from 'express';
import { client } from '..';

class Goods {

    public async _getAllGoods(req: Request, res: Response) {
        res.json(await client.goods.findMany());
    }
    
    public async _getGood(req: Request, res: Response) {
        const good = await client.goods.findUnique({
            where: {
                id: req.body.id
            }
        });
        
        if(!good)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
            
        res.json(good);
    }

    public async _createNewGood(req: Request, res: Response) {

        if(!req.body.name || !req.body.price || !req.body.description)
            return res.status(400).json({'message': 'Name, price and description are required'});
        
        await client.goods.create({
            data: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            }
        });
        
        res.status(201).json({'message': 'Successfully created'});
    }

    public async _updateGood(req: Request, res: Response) {
        const good = await client.goods.findUnique({
            where: {
                id: req.body.id
            }
        })
        
        if(!good)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        await client.goods.update({
            where: {
                id: req.body.id
            },
            data: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            }
        });

        res.json(await client.goods.findMany());
    }

    public async _deleteGood(req: Request, res: Response) {
        const good = await client.goods.findUnique({
            where: {
                id: req.body.id
            }
        });
        
        if(!good)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        await client.goods.delete({
            where: {
                id: req.body.id
            }
        });

        res.json(await client.goods.findMany());
    }
}

export { Goods };