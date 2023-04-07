import type { CategoryDto, GoodsDto } from '../dto';

class Category {
    private name : string;
    private goods : GoodsDto[];

    constructor(category : CategoryDto) {
        this.name = category.name;
        this.goods = category.goods;
    }
}

export { Category };