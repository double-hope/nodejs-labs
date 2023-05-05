const getGood = require('./goods/get-good');
const getGoods = require('./goods/get-goods');
const createGood = require('./goods/create-good');
const updateGood = require('./goods/update-good');
const deleteGood = require('./goods/delete-good');

const getCategory = require('./categories/get-category');
const getCategories = require('./categories/get-categories');
const createCategory = require('./categories/create-category');
const updateCategory = require('./categories/update-category');
const deleteCategory = require('./categories/delete-category');

const registerUser = require('./user/register-user');
const refreshToken = require('./user/refresh-token');
const profile = require('./user/get-profile');
const authUser = require('./user/auth-user');
const logoutUser = require('./user/logout-user');

module.exports = {
    paths:{
        '/goods':{
            ...getGoods,
            ...createGood
        },
        '/good/{id}':{
            ...getGood,
            ...updateGood,
            ...deleteGood
        },
        '/categories':{
            ...getCategories,
            ...createCategory
        },
        '/category/{id}':{
            ...getCategory,
            ...updateCategory,
            ...deleteCategory
        },
        '/register':{
            ...registerUser
        },
        '/auth':{
            ...authUser
        },
        '/refresh':{
            ...refreshToken
        },
        '/profile':{
            ...profile
        },
        '/logout':{
            ...logoutUser
        }
    }
}