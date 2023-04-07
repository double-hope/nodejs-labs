import {Router} from 'express';
import goods from '../../data/Goods.json';
import { GoodsApiDto } from '../../dto';

const router = Router();

const data: GoodsApiDto = {
    goods,
}

router.route('/')
    .get((req, res) => {
        res.json(data.goods);
    })
    .post((req, res) => {
        console.log(req.body);
        
        res.json({
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        });
    })
    .put((req, res) => {
        res.json({
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id });
    });

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.body.id })
})

export { router };
