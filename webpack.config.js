const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // No need to write a index.html
        new HtmlWebpackPlugin({
            title: 'Pixi Game'
        }),
        // Do not accumulate files in ./dist
        new CleanWebpackPlugin(),
        // Copy assets to serve them
        new CopyPlugin({
            patterns: [{ from: 'src/assets', to: 'assets', noErrorOnMissing: true }],
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000,
    },
};
