const path = require("path");

module.exports = {
    entry: [
        "./src/index.js",
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.ico$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./assets/img",
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[contentHash].[ext]",
                        outputPath: "./assets/img",
                    }
                    },
                   {
                        loader: 'image-webpack-loader',
                        options: {
                            //bypassOnDebug: true, // webpack@1.x
                            //disable: true, // webpack@2.x and newer
                            ozjpeg: {
                                progressive: true,
                                quality: 50
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.5, 0.5],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:  {                   
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "assets/fonts"
                    }
                }
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'font-awesome-loader' }
                ]
            },
           /*{
                test: /\.(ogg|mp3|wav|mpe?g)$/,
                use:  {                   
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/aud"
                    }
                }
            },*/
        ]
    }
};