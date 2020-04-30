const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./web/src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: "yr-ui",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: [
                    "@svgr/webpack",
                    "url-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 80 * 1024, esModule: false
                        }
                    },
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            insert: "bottom"
                        }
                    },
                    "css-loader", "postcss-loader", "sass-loader"
                ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "流着万条永远的河",
            template: "./web/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        })
    ]
};