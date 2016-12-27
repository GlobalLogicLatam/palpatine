var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
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

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist/',
        filename: "./[name].bundle.min.js"
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
            { test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/ },
            { test: /\.scss$/, include: /.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
        ]
    },
    devServer: {
        outputPath: 'dist'
    },
    plugins: [
            new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
            new ExtractTextPlugin('/[name].css',{ allChunks: true }),
            new webpack.ProvidePlugin({  jQuery: 'jquery',  $: 'jquery', jquery: 'jquery' }),
            new CopyWebpackPlugin([{ context: 'app/', from: '**/*' }], {ignore: ['*.ts','*.scss']})
       ]
};