
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const path = require("path");

module.exports = merge(common,{
  mode: "production",
  output: {
    filename: "[name].[contentHash].js",
    chunkFilename: '[name].[contentHash].js',
    path: path.resolve(__dirname, "prod"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.php',
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        },
      }),
      new HtmlWebpackPlugin({
        filename: 'contactform.php',
        template: './src/contactform.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        },
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
    /*new HtmlCriticalWebpackPlugin({
      src: 'src/template.html',
      prod: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      penthouse: {
        blockJSRequests: false,
      }
    }),*/
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], //order matter. also the one with the highest index loads first. in this case css-loader
      },
    ]
  }
});
