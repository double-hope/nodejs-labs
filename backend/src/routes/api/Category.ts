import {Router} from 'express';
import category from '../../data/Category.json';
import { CategoryApiDto } from '../../dto';

const router = Router();

const data: CategoryApiDto = {
    category
};

