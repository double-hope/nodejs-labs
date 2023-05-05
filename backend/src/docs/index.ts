import basicInfo from './basicInfo';
import servers from './servers';
import components from './components';
import tags from './tags';
import connector from './connector';

export default {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...connector,
};