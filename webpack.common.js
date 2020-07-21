const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], //order matter. also the one with the highest index loads first. in this case css-loader
            }
        ]
    }
};