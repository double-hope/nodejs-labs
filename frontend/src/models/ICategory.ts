import {type Good} from './IGood';

export interface Category {
    id: string;
    name: string;
    description: string;
    goods?: Good[] | [];
}

export interface UpdateCategory {
    name: string;
    description: string;
}

export interface Categories {
    categories: Category[];
}