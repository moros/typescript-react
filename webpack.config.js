var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: 'eval',

    // this will be our app's entry point (webpack will look for 
    // it in the 'src' directory due to the modulesDirectory setting below).
    entry: [
        path.join(__dirname, '/src/index.tsx')
    ],

    // output the bundled JS to dist/app.js
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },

    resolve: {
        // add 'src' to our modulesDirectories, as all our app code will 
        // live in there, so Webpack should look in there for modules
        modules: [__dirname, 'node_modules'],

        // look for modules in .ts(x) files first, then .js(x)
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [{
            // .ts(x) fils should first pass through the Typescript loader,
            // and then through babel
            test: /\.tsx?$/,
            include: path.join(__dirname, 'src'),
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', { modules: false }],
                        'react'
                    ]
                }
            }]
        }]
        // loaders: [
        //     { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader']}
        // ]
    },

    plugins: [
        // setup the notifier plugin - you can remove this 
        // (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({
            alwaysNotify: true
        })
    ]
};