const path = require("path");
const base = require("./webpack.config");
const {smart} = require("webpack-merge");
const webpack = require('webpack')
module.exports = smart(
    base,
    {
        devServer: {
            port: 3000,
            contentBase: path.resolve(__dirname, "dist"),
        },
        mode: "development",
        devtool:'source-map',
        watch: true,  //响应式的打包
        watchOptions: {
            poll: 1000,   //每秒轮询500次
            aggregateTimeout: 500,   //防抖，一直输入代码，500毫秒后再打包
            ignored: /node_modules/,   //忽略
        },
        module: {
            rules: []
        },
        plugins: [
            new webpack.DllReferencePlugin({
                manifest:path.resolve(__dirname,'dist','manifest.json')
            })
        ]
    }
);