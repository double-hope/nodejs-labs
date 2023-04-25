import { Request, Response } from 'express';
import { client } from '..';

class Logout {

    public async _logout(req: Request, res: Response) {
        const cookies = req.cookies;

        if(!cookies?.jwt) return res.sendStatus(204);
        
        const refreshToken = cookies.jwt;

        const foundUser = await client.user.findFirst({
            where: {
                refreshToken,
            }
        });
        
        if(!foundUser) {
            res.clearCookie('jwt', { httpOnly: true });
            return res.sendStatus(401);
        }

        await client.user.update({
            where: {
                id: foundUser.id
            },
            data: {
                refreshToken: ''
            }
        });

        res.clearCookie('jwt', { httpOnly: true });
        res.sendStatus(204);
    }
}

export { Logout };