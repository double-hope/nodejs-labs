import { CategoryDto } from "./Categories";
import { Prisma } from '@prisma/client';

export interface GoodsDto {
    id : number;
    name : string;
    price : Prisma.Decimal | number;
    description : string;
    categoryId? : number;
    category? : CategoryDto;
}