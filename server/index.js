import express from 'express';
import bodyParser from 'body-parser';
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

app.post('/shorten', bodyParser.json(), (req, res) => {
    let {url} = req.body;
    console.log(url);      // your JSON
    bitlyApi.shorten(url).then((shortUrl) => {
        (shortUrl.message) ? res.status(400).send(shortUrl.message) : res.send(shortUrl);
    });
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(config.port, () => console.log(`running on localhost:${config.port}`));