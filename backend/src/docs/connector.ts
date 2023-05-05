import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from './categories';
import { createGood, deleteGood, getGood, getGoods, updateGood } from './goods';
import { authUser, getProfile, logoutUser, refreshUserToken, registerUser } from './user';

export default {
    paths: {
        '/goods': {
            ...getGoods,
            ...createGood,
        },
        '/good/{id}': {
            ...getGood,
            ...updateGood,
            ...deleteGood,
        },
        '/categories': {
            ...getCategories,
            ...createCategory,
        },
        '/category/{id}': {
            ...getCategory,
            ...updateCategory,
            ...deleteCategory,
        },
        '/register': {
            ...registerUser,
        },
        '/auth': {
            ...authUser,
        },
        '/refresh': {
            ...refreshUserToken,
        },
        '/profile': {
            ...getProfile,
        },
        '/logout': {
            ...logoutUser,
        }
    }
}