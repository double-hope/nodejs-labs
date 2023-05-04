const getGood = require('./get-good');
const getGoods = require('./get-goods');
const createGood = require('./create-good');
const updateGood = require('./update-good');
const deleteGood = require('./delete-good');

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
        }
    }
}