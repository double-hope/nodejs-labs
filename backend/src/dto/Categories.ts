import type { GoodsDto } from './Goods';

export interface CategoryDto {
    id: number;
    name : string;
    goods : GoodsDto[];
}
