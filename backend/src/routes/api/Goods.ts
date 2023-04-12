import { Router } from 'express';
import { Goods } from '../../controllers';
import { ROLES_LIST } from '../../config';
import { verifyRoles } from '../../middlewares';

const router = Router();
const goodsController = new Goods();

router.route('/')
    /**
     * @swagger
     * components:
     *   schemas:
     *     Goods:
     *       type: object
     *       required:
     *         - id
     *         - name
     *         - price
     *         - description
     *      properties:
     *        id:
     *          type: string
     *          description: The auto-generated id of the good
     *        name:
     *          type: string
     *          description: The name of the good
     *        price:
     *          type: number
     *          description: The price of the good
     *        description:
     *          type: string
     *          description: The description of the good
     *      example:
     *        id: fjrea132$ds
     *        name: Computer
     *        price: 10000
     *        description: For your comfort
     */
    .get(goodsController._getAllGoods.bind(goodsController))
    .post(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), goodsController._createNewGood.bind(goodsController))
    .put(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), goodsController._updateGood.bind(goodsController))
    .delete(verifyRoles(ROLES_LIST.ADMIN), goodsController._deleteGood.bind(goodsController));

router.route('/:id')
    .get(goodsController._getGood.bind(goodsController))

export { router };
