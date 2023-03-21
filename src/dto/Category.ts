import type { GoodsDto } from './Goods';

interface CategoryDto {
    name : string;
    goods : GoodsDto[];
    // TODO subCategory: null | CategoryDto;
}

export { CategoryDto };