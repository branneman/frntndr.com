//
// Container for all controllers
//

'use strict';

module.exports = {
    svg2png:  require('./svg2png'),
    concatJS: require('./concat-js'),
    static:   require('./static'),
    views:    require('./views'),
    page404:  require('./page404')
};
