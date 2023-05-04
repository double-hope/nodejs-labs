import { Router } from 'express';
import { Goods } from '../../controllers';
import { ROLES_LIST } from '../../config';
import { verifyRoles } from '../../middlewares';

const router = Router();
const goodsController = new Goods();

router.route('/')
    .get(goodsController._getAllGoods.bind(goodsController))
    .post(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), goodsController._createNewGood.bind(goodsController))
    .put(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), goodsController._updateGood.bind(goodsController))
    .delete(verifyRoles(ROLES_LIST.ADMIN), goodsController._deleteGood.bind(goodsController));

router.route('/:id')
    .get(goodsController._getGood.bind(goodsController))

export { router };
