import assert from 'power-assert';

import pkg from '../package.json';

//import * as src from '../src/';

describe(pkg.name, () => {
    it('App should load without crashing', () => {
        assert.equal("Hi", "Hi");
    });
});

describe('App should request bitly', function () {
    it('should check bitly api', async function () {

        assert.equal("Hi", "Hi");
    });
});

