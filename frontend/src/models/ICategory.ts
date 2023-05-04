import {type Good} from './IGood';

export interface Category {
    id: string;
    name: string;
    description: string;
    goods?: Good[] | [];
}

export interface CreateCategory {
    name: string;
    description: string;
}

export interface UpdateCategory extends CreateCategory {}

export interface Categories {
    categories: Category[];
}