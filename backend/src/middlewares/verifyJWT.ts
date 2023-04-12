import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface IGetUserRequest extends Request {
    email: string;
    roles: string[];
}

interface TokenInterface {
    UserInfo: {
        email: string;
        roles: string[];  
    }
}

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!(authHeader as string)?.startsWith('Bearer ')) return res.sendStatus(401);
    
    const token = (authHeader as string).split(' ')[1];
    jwt.verify(
        token, 
        process.env.ACCESS_TOKEN_SECRET as string, 
        (err, decoded) => {
            if(err) return res.sendStatus(403); 
            (req as IGetUserRequest).email = (decoded as TokenInterface).UserInfo.email;
            (req as IGetUserRequest).roles = (decoded as TokenInterface).UserInfo.roles;
            next();
        }
    );
}

export { verifyJWT };