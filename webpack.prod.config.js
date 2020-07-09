const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

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
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        })
    ]
})