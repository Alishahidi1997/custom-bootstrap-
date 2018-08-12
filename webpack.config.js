var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './styles/custom.scss',
    output: {
        filename: 'styles/global/custom.css'
    },
    module: {

        rules: [
            /*
            your other rules for JavaScript transpiling go in here
            */
            { // regular css files
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'styles/global/custom.css',
            allChunks: true,
        }),
    ],
};