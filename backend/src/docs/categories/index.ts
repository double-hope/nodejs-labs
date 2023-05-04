const getCategory = require('./get-category');
const getCategories = require('./get-categories');
const createCategory = require('./create-category');
const updateCategory = require('./update-category');
const deleteCategory = require('./delete-category');

module.exports = {
    paths:{
        '/categories':{
            ...getCategories,
            ...createCategory
        },
        '/category/{id}':{
            ...getCategory,
            ...updateCategory,
            ...deleteCategory
        }
    }
}