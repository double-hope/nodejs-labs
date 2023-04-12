import { Request, Response, NextFunction } from 'express';

interface IGetUserRequest extends Request {
    email: string;
    roles: string[];
}

const verifyRoles = (...allowedRoles: string[]) => {
    return(req: Request, res: Response, next: NextFunction) => {
        if(!(req as IGetUserRequest)?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const result = (req as IGetUserRequest).roles.map(role => allowedRoles.includes(role)).find(val => val === true);
        if(!result) return res.sendStatus(401);
        next();
    } 
}

export { verifyRoles };