const path = require("path");
const base = require("./webpack.config");
const {smart} = require("webpack-merge");

module.exports = smart(
    base,
    {
        devServer: {
            port: 3000,
            contentBase: path.resolve(__dirname, "dist"),
        },
        mode: "development",
        devtool:'source-map',
        module: {
            rules: []
        },
        plugins: []
    }
);