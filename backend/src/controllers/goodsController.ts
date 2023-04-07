import { Request, Response } from 'express';

import { GoodsApiDto } from '../dto';
import goods from '../model/Goods.json';

class Goods {
    private data: GoodsApiDto;


    constructor() {
        this.data  = {
            goods,
        }
    }

    public _getAllGoods(req: Request, res: Response) {
        res.json({ "id": req.body.id });
    }
    
    public _getGood(req: Request, res: Response) {
        res.json(this.data.goods);
    }

    public _createNewGood(req: Request, res: Response) {
        res.json({
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        });
    }

    public _updateGood(req: Request, res: Response) {
        res.json({
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        });
    }

    public _deleteGood(req: Request, res: Response) {
        res.json({ "id": req.body.id });
    }
}

export { Goods };