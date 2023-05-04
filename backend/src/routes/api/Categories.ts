import { Router } from 'express';
import { Category } from '../../controllers';
import { ROLES_LIST } from '../../config';
import { verifyRoles } from '../../middlewares';

const router = Router();
const goodsController = new Category();

router.route('/')
    /**
     * @swagger
     * components:
     *   schemas:
     *     Categories:
     *       type: object
     *       required:
     *         - id
     *         - name
     * 
     */
    .get(goodsController._getAllCategories.bind(goodsController))
    .post(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), goodsController._createNewCategory.bind(goodsController))
    .put(verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.EDITOR), goodsController._updateCategory.bind(goodsController))
    .delete(verifyRoles(ROLES_LIST.ADMIN), goodsController._deleteCategory.bind(goodsController));

router.route('/:id')
    .get(goodsController._getCategory.bind(goodsController))

export { router };
