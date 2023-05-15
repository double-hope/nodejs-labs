import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { client } from '..';

class Profile {

    constructor() { dotenv.config(); }

    async _getProfile(req: Request, res: Response) {
        const { id, auth } = req.body;
        const foundUser = await client.user.findFirst({where:{id: +id}});
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

            const otherUser = await client.user.update({
                where:{
                    id:foundUser.id
                },
                data:{
                    refreshToken
                }
            })

            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({ user: foundUser, accessToken });
        } else {
            res.sendStatus(401);
        }
    }
}

export { Profile };