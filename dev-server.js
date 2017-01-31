const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./config/webpack/webpack.config.development');
const config = require('./config/config.base');

const app = express();
const compiler = webpack(webpackConfig);

function log() {
    arguments[0] = '\nWebpack: ' + arguments[0];
    console.log.apply(console, arguments);
}

app.use(webpackDevMiddleware(compiler, config.devServer));

app.use(webpackHotMiddleware(compiler));

app.listen(config.env.PORT, config.env.HOST, (err) => {
    if (err) {
        log(err);
        return;
    }

    log('App is listening at http://%s:%s, NODE_ENV:%s', config.env.HOST, config.env.PORT, config.env.NODE_ENV);
});