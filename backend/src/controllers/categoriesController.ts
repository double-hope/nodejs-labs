import { Request, Response } from 'express';
import {client} from '..';

class Category {

    constructor() {}

    public async _getAllCategories(req: Request, res: Response) {
        res.json(await client.category.findMany());
    }
    
    public async _getCategory(req: Request, res: Response) {
        const category = await client.category.findUnique({where:{id:+req.params.id}});
        
        if(!category)
            return res.status(404).json({'message': `ID ${req.params.id} was not found`});
            
        res.json(category);
    }

    public async _createNewCategory(req: Request, res: Response) {
        const newCategory = {
            name: req.body.name,
            description: req.body.description
        }

        if(!newCategory.name)
            return res.status(400).json({'message': 'Name, price and description are required'});

        await client.category.create({
            data:
            newCategory
        })
        
        res.status(201).json(await client.category.findMany());
    }

    public async _updateCategory(req: Request, res: Response) {
        const category = await client.category.findUnique({where:{id:+req.body.id}});

        if(!category)
            return res.status(404).json({'message': `ID ${req.body.id} was not found`});
        
        if(req.body.name) {
            await client.category.update({
                where:{
                    id:+req.body.id,
                },
                data:{
                    name:req.body.name,
                }
            })
        }
        if(req.body.description) {
            await client.category.update({
                where:{
                    id:+req.body.id,
                },
                data:{
                    description:req.body.description,
                }
            })
        }

        res.json(await client.category.findMany());
    }

    public async _deleteCategory(req: Request, res: Response) {
        const category = await client.category.findUnique({where:{id:+req.body.id}})
        
        if(!category)
            return res.status(404).json({'message': `ID ${req.body.id} was not found`});

        const deleteData = await client.category.delete({
            where:{
                id:+req.body.id
            }
        })

        res.json(await client.category.findMany());
    }
}

export { Category };