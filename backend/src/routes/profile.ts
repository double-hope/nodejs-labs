import { Router } from 'express';
import { Profile } from '../controllers/profileController';

const profileController = new Profile();
const router = Router();

router.post('/', profileController._getProfile.bind(profileController));

export { router };