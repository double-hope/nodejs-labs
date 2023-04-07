import { GoodsDto } from '../Goods';

interface GoodsApiDto {
    goods: GoodsDto[];
    setGoods: (good: GoodsDto[]) => void;
}

export { GoodsApiDto };