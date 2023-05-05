import { Request, Response } from 'express';
import type { CategoryApiDto, CategoryDto } from '../dto';
import categories from '../model/Categories.json';
import { randomUUID } from 'crypto';

class Category {
    private data: CategoryApiDto;

    constructor() {
        this.data  = {
            categories,
            setCategories: (data: CategoryDto[]) => { this.data.categories = data }
        }
    }

    public _getAllCategories(req: Request, res: Response) {
        res.json(this.data);
    }
    
    public _getCategory(req: Request, res: Response) {
        const category = this.data.categories.find(category => category.id === req.params.id);
        
        if(!category)
            return res.status(404).json({'message': `ID ${req.params.id} was not found`});
            
        res.json(category);
    }

    public _createNewCategory(req: Request, res: Response) {
        const newCategory = {
            id: randomUUID(),
            name: req.body.name,
            description: req.body.description,
            goods: []
        }

        if(!newCategory.name)
            return res.status(400).json({'message': 'Name, price and description are required'});

        this.data.setCategories([...this.data.categories, newCategory]);
        
        res.status(201).json(this.data.categories);
    }

    public _updateCategory(req: Request, res: Response) {
        const category = this.data.categories.find(category => category.id === req.body.id);

        if(!category)
            return res.status(404).json({'message': `ID ${req.body.id} was not found`});
        
        if(req.body.name) category.name = req.body.name;
        if(req.body.description) category.description = req.body.description;

        const filteredData = this.data.categories.filter(category => category.id !== req.body.id);
        this.data.setCategories([...filteredData, category]);

        res.json(this.data.categories);
    }

    public _deleteCategory(req: Request, res: Response) {
        
        const category = this.data.categories.find(category => category.id === String(req.body.id));
        
        if(!category)
            return res.status(400).json({'message': `ID ${req.body.id} was not found`});
        
        const filteredData = this.data.categories.filter(category => category.id !== String(req.body.id));
        this.data.setCategories([...filteredData]);

        res.json(this.data.categories);
    }
}

export { Category };