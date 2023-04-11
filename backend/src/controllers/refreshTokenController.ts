import { Request, Response } from 'express';
import { UserDto } from '../dto';
import { UsersApiDto } from '../dto/api/Users';
import users from '../model/Users.json';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

interface TokenInterface {
    email: string;
}

class Refresh {
    private userDB: UsersApiDto;

    constructor() {
        this.userDB = {
            users, 
            setUsers: (data: UserDto[]) => { this.userDB.users = data }
        }

        dotenv.config();
    }

    _refreshToken(req: Request, res: Response) {
        const cookies = req.cookies;

        if(!cookies?.jwt) return res.sendStatus(401);
        
        const refreshToken = cookies.jwt;

        const foundUser = this.userDB.users.find(user => user.refreshToken === refreshToken);
        if(!foundUser) return res.sendStatus(401);

        jwt.verify(
            refreshToken, 
            process.env.REFRESH_TOKEN_SECRET as string,
            (err: any, decoded: any) => {
                if(err || foundUser.email !== (decoded as TokenInterface).email) return res.sendStatus(403); 
                const accessToken = jwt.sign(
                    { 'email': (decoded as TokenInterface).email },
                    process.env.ACCESS_TOKEN_SECRET as string,
                    { expiresIn: '30s' }
                );
                res.json({ accessToken });
            }
        )
    }
}

export { Refresh };