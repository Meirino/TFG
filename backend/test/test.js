const assert = require('assert');

/*
    Añadir tests
*/

describe('API Controller', function () {
    describe('Hello World', function () {
        it('Should return a "hello world" string', () => {
            assert.equal(() => {
                return "Hello World"
            }, "Hello world");
        });
    });
});