const postcssCssNext = require('postcss-cssnext');
const postcssImport =  require('postcss-import');
const postcssPreseEnv = require('postcss-preset-env');
const postcssScss = require('postcss-scss');


module.exports = {
    syntax: postcssScss,
    plugins:[
        postcssImport,
        postcssCssNext,
        postcssPreseEnv
    ]
};