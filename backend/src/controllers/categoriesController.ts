import { Request, Response } from 'express';
import {client} from '..';
import {redisClient} from "..";
import { Category } from "@prisma/client";

class Categories {

    constructor() {}

    public async _getAllCategories(req: Request, res: Response) {
        const data = await redisClient
            .get('categories')
            .catch((err)=>console.log(err));

        if(!data){
            const categories = await client.category.findMany();            
            await redisClient.setEx('categories', 3600, JSON.stringify(categories));
            res.json(categories);
        }
        else res.json(JSON.parse(data));

    }
    
    public async _getCategory(req: Request, res: Response) {

        const data = await redisClient
            .get('category')
            .catch((err)=>console.log(err));

        if(!data) {
            var category = await client.category.findUnique({
                where: {
                    id: +req.params.id,
                }
            });
        }
        else {
            const categories: Category[] = JSON.parse(data);
            var category = categories.find((category) => category.id === +req.params.id) ?? null;
        }

        
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
            data: newCategory
        })

        const categories = await client.category.findMany();
        await redisClient.setEx('categories', 3600, JSON.stringify(categories));
        res.status(201).json(categories);
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

        const categories = await client.category.findMany();
        await redisClient.setEx('categories', 3600, JSON.stringify(categories));
        res.json(categories);
    }

    public async _deleteCategory(req: Request, res: Response) {
        const category = await client.category.findUnique({where:{id:+req.body.id}})
        
        if(!category)
            return res.status(404).json({'message': `ID ${req.body.id} was not found`});

        await client.category.delete({
            where:{
                id:+req.body.id
            }
        })

        const categories = await client.category.findMany();
        await redisClient.setEx('categories', 3600, JSON.stringify(categories));
        res.json(categories);
    }
}

export { Categories };