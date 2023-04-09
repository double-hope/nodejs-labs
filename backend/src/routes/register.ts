import { Router } from 'express';
import { Register } from '../controllers';

const router = Router();
const registerController = new Register();

router.post('/', registerController._createNewUser.bind(registerController));


export { router };