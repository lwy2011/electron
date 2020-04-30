const {path} = require("path");


module.exports = {
    entry: "./web/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test:/\.[tj]sx?$/,
                use:'ts-loader'
            },
            {
                tset:/\.s?css$/,
                use:{

                }
            }
        ]
    }
};