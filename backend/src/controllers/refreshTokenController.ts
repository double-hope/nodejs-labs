import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { client } from '..';

interface TokenInterface {
    email: string;
}

class Refresh {

    public async _refreshToken(req: Request, res: Response) {
        const cookies = req.cookies;

        if(!cookies?.jwt) return res.sendStatus(401);
        
        const refreshToken = cookies.jwt;
        

        const foundUser = await client.user.findFirst({
            where: {
                refreshToken
            }
        });
        
        if(!foundUser) return res.sendStatus(401);

        jwt.verify(
            refreshToken, 
            process.env.REFRESH_TOKEN_SECRET as string,
            (err: any, decoded: any) => {
                if(err || foundUser.email !== (decoded as TokenInterface).email) return res.sendStatus(403); 
                const roles = foundUser.roles;
                const accessToken = jwt.sign(
                    { 
                        'UserInfo': {
                            'email': (decoded as TokenInterface).email,
                            roles
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET as string,
                    { expiresIn: '15m' }
                );
                res.json({ accessToken });
            }
        )
    }
}

export { Refresh };