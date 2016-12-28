var webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app:  "./app/main",
        vendor: "./app/polyfills"
    },

    devtool: "source-map",

    resolve: {
        extensions: ['','.js', '.ts', '.css', '.scss']
    },
    path: path.resolve(__dirname, "dist"),
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'

            }
        ],
        loaders: [
            { test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/ }
        ]
    },
    devServer: {
        outputPath: 'dist'
    },
    plugins: [
            new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
            new webpack.ProvidePlugin({  jQuery: 'jquery',  $: 'jquery', jquery: 'jquery' }),
            new CopyWebpackPlugin([{ context: 'app/', from: '**/*' }], {ignore: ['*.ts','*.scss']})
       ],

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist/',
        filename: "./[name].bundle.min.js"
    }
};