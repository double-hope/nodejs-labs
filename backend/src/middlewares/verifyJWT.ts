import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface IGetEmailRequest extends Request {
    email: string;
}

interface TokenInterface {
    email: string;
}

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.sendStatus(401);
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token, 
        process.env.ACCESS_TOKEN_SECRET as string, 
        (err, decoded) => {
            if(err) return res.sendStatus(403); 
            (req as IGetEmailRequest).email = (decoded as TokenInterface).email;
            next();
        }
    );
}

export { verifyJWT };