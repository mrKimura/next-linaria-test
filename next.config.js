const withLinaria = require('next-linaria');

const nextConf = () => {
    const baseConf = {
        linaria: {
            cacheDirectory: '.next/cache/linaria',
            sourceMap: process.env.NODE_ENV === 'development',
        },
    };

    return withLinaria(baseConf);
};

module.exports = nextConf;
