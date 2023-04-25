import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { client } from '..';

class Auth {

    public async _login(req: Request, res: Response) {
        const { email, password } = req.body;

        if(!email || !password) 
            return res.status(400).json({'message': 'Email and password are required'});

        const foundUser = await client.user.findUnique({
            where: {
                email
            }
        });

        if(!foundUser) return res.sendStatus(401);

        const match = await bcrypt.compare(password, foundUser.password);
        if(match) {
            const roles = foundUser.roles;
            const accessToken = jwt.sign(
                { 
                    'UserInfo': {
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
            
            await client.user.update({
                where: {
                    email
                },
                data: {
                    refreshToken
                }
            });

            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        }
    }
}

export { Auth };