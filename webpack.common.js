const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/img",
                    }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            //bypassOnDebug: true, // webpack@1.x
                            //disable: true, // webpack@2.x and newer
                            mozjpeg: {
                                progressive: true,
                                quality: 50
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.50, 0.50],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 60
                            }
                        },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:  {                   
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/fonts"
                    }
                }
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/,
                use:  {                   
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/snd"
                    }
                }
            }
        ]
    }
};