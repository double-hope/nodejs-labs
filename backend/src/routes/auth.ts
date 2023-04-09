import { Router } from 'express';
import { Auth } from '../controllers/authController';

const authController = new Auth();
const router = Router();

router.post('/', authController._login.bind(authController));

export { router };