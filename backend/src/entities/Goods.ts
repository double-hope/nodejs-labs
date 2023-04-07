import type { GoodsDto } from '../dto/Goods';

class Goods {
    private name : string;
    private price : number;
    private description : string;
    // TODO characteristics, reviews

    constructor(goods : GoodsDto) {
        this.name = goods.name;
        this.price = goods.price;
        this.description = goods.description;
    }

    public getName() : string{
        return this.name;
    }

    public setName(name : string){
        this.name = name;
    }
}

export { Goods };