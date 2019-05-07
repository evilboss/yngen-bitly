import {BitlyClient} from 'bitly';
import moment from 'moment';
import {logWriter} from "./logWriter";
import config from './config/config.json';

const bitly = new BitlyClient(config.bitlyKey, {});

class BitlyApi {
    async shorten(url) {
        return bitly
            .shorten(url)
            .then(function (result) {
                console.log(result);
                logWriter.write({
                    timestamp: moment().format('X'),
                    longURL: result.long_url,
                    shortURL: result.url,
                });
                return result;
            })
            .catch(function (error) {
                console.error(error);
                return error;
            });

    }

    test() {
        return 'test';
    };
};
export let bitlyApi = new BitlyApi();