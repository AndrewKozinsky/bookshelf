// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const path = require('path')
const webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = function (env = {}) {

    const mode = env.mode || 'development'

    return {
        mode,
        entry:  path.resolve(__dirname, 'src/index.js'),
        output: getOutput(mode),
        module: {
            rules: [
                processingJS(),
                processingImages(),
                processingCSS(mode),
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist')
        },
        devtool: false,
        plugins: managePlugins(mode)
    }
}


// Функция возвращает параметры точки выхода
function getOutput(mode) {
    // Имя папки в которую складывается результат работы
    const folderName = (mode === 'development') ? 'dist' : 'build'

    return {
        filename: "main.js",
        path: path.resolve(__dirname, folderName)
    }
}

// Функция управляет обработкой файлов JavaScript
function processingJS() {

    return {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-react"]
            }
        }
    }
}

// Функция управляет обработкой изображений
function processingImages() {
    return {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name]-[sha1:hash:7].[ext]'
                }
            }
        ]
    }
}

// Функция управляет обработкой файлов CSS
function processingCSS(mode) {

    const commonConfig = {
        test: /\.s[ac]ss$/i,
        use: [
            'css-loader',
            'sass-loader'
        ]
    }

    const firstLoader = (mode === 'development')
        ? 'style-loader'
        : MiniCssExtractPlugin.loader

    commonConfig.use.unshift( firstLoader )

    return commonConfig
}

// Функция управляет расширениями
function managePlugins(mode) {

    const plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]

    if(mode === 'development') {
        plugins.push(
            new webpack.SourceMapDevToolPlugin({
                filename: '[name].js.map',
            }),
        )
    }
    else {
        plugins.push(
            new MiniCssExtractPlugin()
        )
    }

    return plugins
}