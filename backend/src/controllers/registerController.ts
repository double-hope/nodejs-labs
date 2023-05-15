import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import path from 'path';
import { ROLES_LIST } from '../config';
import { client } from '..';

class Register {


    constructor() {}

    async _createNewUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        
        if(!name || !email || !password) 
            return res.status(400).json({'message': 'Name, email and password are required'});

        const dublicate = await client.user.findFirst({where:{email}});

        if(dublicate) return res.status(409).json({'message': `User with email ${email} already exists`});

        try{
            const hashedPassword = await bcrypt.hash(password, 10);

            await client.user.create({

                data:{
                    name,
                    email,
                    password:hashedPassword,
                    roles:[ROLES_LIST.USER]
                }
            })

            res.status(201).json({'success': `New user ${name} was created`});
        } catch(err){
            const typedError = err as Error;
            res.status(500).json({'message': typedError.message});
        }
    }


}

export { Register };