const path = require("path");
const base = require("./webpack.config");
const {smart} = require("webpack-merge");

module.exports = smart(  //这里的dllplugin没设置！！注意！
    base,
    {
        mode: "production",
        externals: {
            "react": {
                commonjs: "react",
                commonjs2: "react",
                amd: "react",
                root: "React"
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "react-dom",
                root: "ReactDOM"
            },
        },
    }
);