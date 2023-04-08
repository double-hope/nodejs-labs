import { Router } from 'express';
import { Goods } from '../../controllers';

const router = Router();
const goodsController = new Goods();

router.route('/')
    .get(goodsController._getAllGoods.bind(goodsController))
    .post(goodsController._createNewGood.bind(goodsController))
    .put(goodsController._updateGood.bind(goodsController))
    .delete(goodsController._deleteGood.bind(goodsController));

router.route('/:id')
    .get(goodsController._getGood.bind(goodsController))

export { router };
