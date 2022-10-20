const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: {
            'index': './src/main/main.js'
        },
        output: {
            path: __dirname + '/dist',
            filename: 'main.js'
        },
        mode: 'development',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: /src/,
                    use: [{ loader: 'babel-loader'}]

                }
            ]
        }
    },
    //React app
    {
        entry: './src/renderer/app.js',
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        mode: 'development',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: [{ loader: 'babel-loader'}]
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]},
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/renderer/index.html'
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        }
    }
];