const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const categories = require('./categories');
const goods = require('./goods');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...goods,
    ...categories,
};