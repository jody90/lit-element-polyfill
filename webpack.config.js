const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            // exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ['@babel/plugin-syntax-dynamic-import'],
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: 'ie 11'
                        }
                    ]
                ]
            }
        }]
    },
    target: ['es5']
}
