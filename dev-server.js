const { join } = require('path');
const url = require('url');
const http = require('http');
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

// Important part. Send down index.html for all requests
app.use('*', (req, res) => {
    // https://github.com/ReactTraining/react-router/issues/676#issuecomment-73963306
    const opts = url.parse(config.devServer.publicPath);
    const myReq = http.request(opts, (myRes) => {
        res.writeHead(myRes.statusCode, myRes.headers);
        myRes.pipe(res);
    });

    myReq.end();
});

app.listen(config.env.PORT, config.env.HOST, (err) => {
    if (err) {
        log(err);
        return;
    }

    log('App is listening at http://%s:%s, NODE_ENV:%s', config.env.HOST, config.env.PORT, config.env.NODE_ENV);
});