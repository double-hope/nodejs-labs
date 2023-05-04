export interface Good {
    id : string;
    name : string;
    price : number;
    description : string;
}

export interface Goods {
    goods: Good[];
}