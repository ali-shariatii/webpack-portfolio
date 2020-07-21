const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })
],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //order matter. also the one with the highest index loads first. in this case css-loader
      },
    ]
  }
});
