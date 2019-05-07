import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import config from './config/config.json';
import {bitlyApi} from './bitly';

let app = express();
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/shorten', (req, res) => {

    bitlyApi.shorten('http://github.com/tanepiper/node-bitly').then((shortUrl) => {
        (shortUrl.message) ? res.status(400).send(shortUrl.message) : res.send(shortUrl);
    });

});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(config.port, () => console.log(`running on localhost:${config.port}`));