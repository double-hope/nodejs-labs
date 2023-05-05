import { Request, Response } from 'express';
import { UserDto } from '../dto';
import { UsersApiDto } from '../dto/api/Users';
import users from '../model/Users.json';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

class Profile {
    private userDB: UsersApiDto;
    private fsPromises: typeof fs.promises;

    constructor() {
        this.userDB = {
            users, 
            setUsers: (data: UserDto[]) => { this.userDB.users = data }
        }

        this.fsPromises = fs.promises;
        dotenv.config();
    }

    async _getProfile(req: Request, res: Response) {
        const { id, auth } = req.body;

        const foundUser = this.userDB.users.find(user => user.id === id);
        if(!foundUser) return res.sendStatus(404);

        if(auth) {
            const roles = foundUser.roles;
            const accessToken = jwt.sign(
                { 
                    'UserInfo': {
                        id: foundUser.id,
                        'email': foundUser.email,
                        roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET as string,
                { expiresIn: '15m' }
            );
            const refreshToken = jwt.sign(
                { 'email': foundUser.email },
                process.env.REFRESH_TOKEN_SECRET as string,
                { expiresIn: '1d' }
            );
            
            const otherUsers = this.userDB.users.filter(user => user.email !== foundUser.email );
            const currentUser = { ...foundUser, refreshToken };
            this.userDB.setUsers([...otherUsers, currentUser]);
            await this.fsPromises.writeFile(
                path.join(__dirname, '..', 'model', 'Users.json'),
                JSON.stringify(this.userDB.users)
            );

            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({ user: foundUser, accessToken });
        } else {
            res.sendStatus(401);
        }
    }
}

export { Profile };