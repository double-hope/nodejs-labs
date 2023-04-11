import { Router } from 'express';
import { Refresh } from '../controllers/refreshTokenController';

const refreshController = new Refresh();
const router = Router();

router.get('/', refreshController._refreshToken.bind(refreshController));

export { router };