// postcss.config.cjs
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
    plugins: [
        require('postcss-nesting'),
        require('autoprefixer'),
        require('cssnano'),
        postcssJitProps(OpenProps),
    ]
}