const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'src/pages'),
        hot: true,
        watchContentBase: true,
        before(app, server, compiler) {
            const watchFiles = ['.html', '.pug'];

            compiler.hooks.done.tap('done', () => {
                const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);
                if (
                this.hot
                && changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
                ) {
                server.sockWrite(server.sockets, 'content-changed');
                }
            });
        },
    }
})