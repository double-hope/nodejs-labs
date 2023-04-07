import {Router, Request, Response} from 'express';
import { Goods } from '../../controllers/goodsController';

const router = Router();
const goodsController = new Goods();

router.route('/')
    .get(goodsController._getAllGoods)
    .post(goodsController._createNewGood)
    .put(goodsController._updateGood)
    .delete(goodsController._deleteGood);

router.route('/:id')
    .get(goodsController._getGood)

export { router };
