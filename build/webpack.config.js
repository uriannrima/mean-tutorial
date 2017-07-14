const webpack = require('webpack');

module.exports = {
    // Entry/Output Configuration
    entry: './app.module.js',
    output: {
        filename: 'bundle.js'
    },

    // Loaders
    module: {
        loaders: [
            // { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }, // Required only to use ES5/ES6.
            { test: /\.html/, loader: 'raw-loader' }, // Required for template:require('.html');
        ]
    },

    // Plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    // Development
    devtool: 'cheap-eval-source-map',
    devServer: {
        port: 3000,
        hot: true
    }
}