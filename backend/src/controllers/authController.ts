import { Request, Response } from 'express';
import { UserDto } from '../dto';
import { UsersApiDto } from '../dto/api/Users';
import users from '../model/Users.json';
import bcrypt from 'bcrypt';

class Auth {
    private userDB: UsersApiDto;

    constructor() {
        this.userDB = {
            users, 
            setUsers: (data: UserDto[]) => { this.userDB.users = data }
        }
    }

    async _login(req: Request, res: Response) {
        const { email, password } = req.body;

        if(!email || !password) 
            return res.status(400).json({'message': 'Email and password are required'});

        const foundUser = this.userDB.users.find(user => user.email === email);
        if(!foundUser) return res.sendStatus(401);

        const match = await bcrypt.compare(password, foundUser.password);
        if(match) {
            res.json({'success': `User with email ${email} is logged in`});
        } else {
            res.sendStatus(401);
        }
    }
}

export { Auth };