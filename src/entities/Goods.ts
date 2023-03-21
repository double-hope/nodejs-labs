import type {GoodsDTO} from "../dto/Goods";
class Goods {
    private name:string;
    private price:number;
    private description:string;
    // TODO characteristics, reviews

    constructor(goods:GoodsDTO) {
        this.name = goods.name;
        this.price = goods.price;
        this.description = goods.description;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name = name;
    }
}