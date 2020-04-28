const {path} = require("path");


module.exports = {
    entry: "./web/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};