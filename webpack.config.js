var path = require('path')
var nodeExternals = require('webpack-node-externals')


module.exports = {
    resolve: {
        fallback: {
        fs: false
        }
    },
    experiments: {
        topLevelAwait: true,
    },
      
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.graphql', '.jsx', '.js'],
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: ['@babel/preset-env'],
                    // targets: {
                    //     node: true,
                    // },
                },
            },
        ],
    },
}