module.exports = {
    presets: [
        ['@babel/preset-env',
            {
                targets: {
                    browsers: 'chrome 58,ie 9,> 0.25%'
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    plugins: [['@babel/plugin-transform-runtime',{             //避免重复引入,禁用了 babel 自动对每个文件的 runtime 注入，而是引入 babel-plugin-transform-runtime 并且使所有辅助代码从这里引用
        "absoluteRuntime": false,
        "corejs": {
            version: 3,
            proposals: true
        },                                            //配置进行ES6=>ES5转化
        "helpers": true,
        "regenerator": true,
        "useESModules": false
    }]],
    sourceMaps: process.env.NODE_ENV === 'production' ? false : true
  };