const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: "cheap-module-source-map",
    plugins: [
        new OptimizeCss({                               //压缩css
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),
    ]
})