const assert = require('assert');
const login_controller = require('../controladores/logincontroller');

/*
    Añadir tests
*/

describe('API Controller', function () {
    describe('Hello World', function () {
        it('Should return a "hello world" string', () => {
            assert.equal(login_controller.hello_world(), 'hello world');
        });
    });
});