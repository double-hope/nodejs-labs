import { Request, Response, NextFunction } from 'express';

interface IGetUserRequest extends Request {
    roles: string[];
}

const verifyRoles = (...allowedRoles: string[]) => {
    
    return(req: Request, res: Response, next: NextFunction) => {
        if(!(req.body as IGetUserRequest)?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const result = (req.body as IGetUserRequest).roles.map(role => allowedRoles.includes(role)).find(val => val === true);
        if(!result) return res.sendStatus(401);
        next();
    } 
}

export { verifyRoles };