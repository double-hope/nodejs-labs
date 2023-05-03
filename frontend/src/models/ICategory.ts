import {type Good} from './IGood';

export interface Category {
    id: string;
    name : string;
    description: string;
    goods : Good[];
}
