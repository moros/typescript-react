var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: false,
    historyApiFallback: true
}).listen(3300, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3200/');
})