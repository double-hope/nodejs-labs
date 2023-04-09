import { Request, Response } from 'express';
import { UserDto } from '../dto';
import users from '../model/Users.json';
import { UsersApiDto } from '../dto/api/Users';
import fs from 'fs';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import path from 'path';

class Register {
    private usersDB: UsersApiDto;
    private fsPromises: typeof fs.promises;

    constructor() {
        this.usersDB  = {
            users,
            setUsers: (data: UserDto[]) => { this.usersDB.users = data }
        }

        this.fsPromises = fs.promises;
    }

    async _createNewUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        
        if(!name || !email || !password) 
            return res.status(400).json({'message': 'Name, email and password are required'});

        const dublicate = this.usersDB.users.find(user => user.email === email);
        if(dublicate) return res.status(409);

        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {id: randomUUID(), name, email, password: hashedPassword};
            this.usersDB.setUsers([...this.usersDB.users, newUser]);
            await this.fsPromises.writeFile(
                path.join(__dirname, '..', 'model', 'Users.json'),
                JSON.stringify(this.usersDB.users)
            )
            res.status(201).json({'success': `New user ${name} was created`});
        } catch(err){
            const typedError = err as Error;
            res.status(500).json({'message': typedError.message});
        }
    }


}

export { Register };