// check webpack.js.org
const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: process.env.NODE_ENV || 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};