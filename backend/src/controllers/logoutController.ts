import { Request, Response } from 'express';
import { UserDto } from '../dto';
import { UsersApiDto } from '../dto/api/Users';
import users from '../model/Users.json';
import fs from 'fs';
import path from 'path';

interface TokenInterface {
    email: string;
}

class Logout {
    private userDB: UsersApiDto;
    private fsPromises: typeof fs.promises;

    constructor() {
        this.userDB = {
            users, 
            setUsers: (data: UserDto[]) => { this.userDB.users = data }
        }

        this.fsPromises = fs.promises;
    }

    async _logout(req: Request, res: Response) {
        const cookies = req.cookies;

        if(!cookies?.jwt) return res.sendStatus(204);
        
        const refreshToken = cookies.jwt;

        const foundUser = this.userDB.users.find(user => user.refreshToken === refreshToken);
        if(!foundUser) {
            res.clearCookie('jwt', { httpOnly: true });
            return res.sendStatus(401);
        }

        const otherUsers = this.userDB.users.filter(user => user.refreshToken !== foundUser.refreshToken);
        const currentUser = { ...foundUser, refreshToken: null };
        this.userDB.setUsers([...otherUsers, currentUser]);

        await this.fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'Users.json'),
            JSON.stringify(this.userDB.users)
        );

        res.clearCookie('jwt', { httpOnly: true });
        res.sendStatus(204);
    }
}

export { Logout };