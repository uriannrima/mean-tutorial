module.exports = {
    entry: './app.module.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html/,
                loader: 'raw-loader'
            },
        ]
    }
}