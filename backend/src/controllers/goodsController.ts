import { Request, Response } from 'express';
import { GoodsApiDto, GoodsDto } from '../dto';
import goods from '../model/Goods.json';
import { randomUUID } from 'crypto';

class Goods {
    private data: GoodsApiDto;

    constructor() {
        this.data  = {
            goods,
            setGoods: (data: GoodsDto[]) => { this.data.goods = data }
        }
    }

    public _getAllGoods(req: Request, res: Response) {
        res.json(this.data);
    }
    
    public _getGood(req: Request, res: Response) {
        const good = this.data.goods.find(good => good.id === req.body.id);
        
        if(!good)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
            
        res.json(good);
    }

    public _createNewGood(req: Request, res: Response) {        
        const newGood = {
            id: randomUUID(),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }

        if(!newGood.name || !newGood.price || !newGood.description)
            return res.status(400).json({'message': 'Name, price and description are required'});

        this.data.setGoods([...this.data.goods, newGood]);
        
        res.status(201).json(this.data.goods);
    }

    public _updateGood(req: Request, res: Response) {
        const good = this.data.goods.find(good => good.id === req.body.id);

        if(!good)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        if(req.body.name) good.name = req.body.name;
        if(req.body.price) good.price = req.body.price;
        if(req.body.description) good.description = req.body.description;

        const filteredData = this.data.goods.filter(good => good.id !== req.body.id);
        this.data.setGoods([...filteredData, good]);

        res.json(this.data.goods);
    }

    public _deleteGood(req: Request, res: Response) {
        const good = this.data.goods.find(good => good.id === req.body.id);
        
        if(!good)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        const filteredData = this.data.goods.filter(good => good.id !== req.body.id);
        this.data.setGoods([...filteredData]);

        res.json(this.data.goods);
    }
}

export { Goods };