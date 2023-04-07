import type { GoodsDto } from './Goods';

export interface CategoryDto {
    id: string;
    name : string;
    goods : GoodsDto[];
}
