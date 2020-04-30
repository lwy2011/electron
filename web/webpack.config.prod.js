const path = require("path");
const base = require("./webpack.config");
const {smart} = require("webpack-merge");

module.exports = smart(
    base,
    {
        mode: "production",
    }
);