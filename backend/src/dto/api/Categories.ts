import { CategoryDto } from '../Categories';

interface CategoryApiDto {
    categories: CategoryDto[];
    setCategories: (category: CategoryDto[]) => void;
}

export { CategoryApiDto };