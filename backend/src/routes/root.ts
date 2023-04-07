import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

export { router };
