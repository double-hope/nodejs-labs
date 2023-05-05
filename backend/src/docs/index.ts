const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const items = require('./connector');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...items
};