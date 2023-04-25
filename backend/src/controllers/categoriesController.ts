import { Request, Response } from 'express';
import { client } from '..';

class Category {

    public async _getAllCategories(req: Request, res: Response) {
        res.json(await client.categories.findMany());
    }
    
    public async _getCategory(req: Request, res: Response) {

        const category = await client.categories.findUnique({
            where: {
                id: req.body.id
            }
        });
        
        if(!category)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
            
        res.json(category);
    }

    public async _createNewCategory(req: Request, res: Response) {

        if(!req.body.name)
            return res.status(400).json({'message': 'Name is required'});

        await client.categories.create({
            data: {
                name: req.body.name
            }
        });
        
        res.status(201).json(await client.categories.findMany());
    }

    public async _updateCategory(req: Request, res: Response) {
        const category = await client.categories.findUnique({
            where: {
                id: req.body.id
            }
        });

        if(!category)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        await client.categories.update({
            where: {
                id: req.body.id
            },
            data: {
                name: req.body.name
            }
        })

        res.json(await client.categories.findMany());
    }

    public async _deleteCategory(req: Request, res: Response) {
        const category = await client.categories.findUnique({
            where: {
                id: req.body.id
            }
        });
        
        if(!category)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        await client.categories.delete({
            where: {
                id: req.body.id
            }
        })

        res.json(await client.categories.findMany());
    }
}

export { Category };