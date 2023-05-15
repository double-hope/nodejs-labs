export interface Good {
    id : number;
    name : string;
    price : number;
    description : string;
}

export interface Goods {
    goods: Good[];
}