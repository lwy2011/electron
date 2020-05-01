const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {react: ["react", "react-dom", "react-router", "react-router-dom"]},
    output: {
        filename: "_dll_[name].js",
        path: path.resolve(__dirname, "dist"),
        library: "_dll_[name]"
    },
    mode: "development",
    plugins: [
        new webpack.DllPlugin({
            name: "_dll_[name]",
            path: path.resolve(__dirname, "dist", "manifest.json")
        })
    ]
};