const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./src/js/main.js",
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    { loader: "sass-loader", options: { sourceMap: true } },
                ],
            },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" }, //импорт медиа файлов в js-код
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CopyPlugin({
            patterns: [{ from: "static", to: "static" }],
        }),
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    devtool: isProduction ? "hidden-source-map" : "source-map",
};
