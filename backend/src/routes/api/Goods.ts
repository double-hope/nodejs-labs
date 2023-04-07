import {Router, Request, Response} from 'express';
import goods from '../../data/Goods.json';
import { GoodsApiDto } from '../../dto';

const router = Router();

const data: GoodsApiDto = {
    goods,
}

router.route('/')
    .get((req: Request, res: Response) => {
        res.json(data.goods);
    })
    .post((req: Request, res: Response) => {
        res.json({
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        });
    })
    .put((req: Request, res: Response) => {
        res.json({
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        });
    })
    .delete((req: Request, res: Response) => {
        res.json({ "id": req.body.id });
    });

router.route('/:id')
    .get((req: Request, res: Response) => {
        res.json({ "id": req.body.id })
})

export { router };
