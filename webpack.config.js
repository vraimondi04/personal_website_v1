const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('config')

const devtool = config.get('shouldUseDevelopmentFeatures') ? { devtool: 'source-map' } : null

module.exports = {
    ...devtool,
    mode: process.env.NODE_ENV || 'development',
    entry: ['./src/front/index'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'front'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/front/index.ejs',
            title: 'What am I listening to?'
        })
    ]
}
