import { Router } from 'express';
import { Logout } from '../controllers/logoutController';

const logoutController = new Logout();
const router = Router();

router.get('/', logoutController._logout.bind(logoutController));

export { router };