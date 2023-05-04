import { Good } from "@/models";

export type CategoriesItemProps = {
    name: string;
    description: string;
    goods: Good[];
    id: number;
}