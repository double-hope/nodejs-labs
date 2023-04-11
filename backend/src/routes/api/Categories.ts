import { Router } from 'express';
import { Category } from '../../controllers';
import { verifyJWT } from '../../middlewares/verifyJWT';

const router = Router();
const goodsController = new Category();

router.route('/')
    .get(verifyJWT, goodsController._getAllCategories.bind(goodsController))
    .post(goodsController._createNewCategory.bind(goodsController))
    .put(goodsController._updateCategory.bind(goodsController))
    .delete(goodsController._deleteCategory.bind(goodsController));

router.route('/:id')
    .get(goodsController._getCategory.bind(goodsController))

export { router };
    