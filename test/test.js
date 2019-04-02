const assert = require('assert');

describe('File to be tested', () => {
    context('function to be tested', () => {
        it('should do something', () => {
            assert.equal(1, 1);
        });

        it('should do something else', () => {
            assert.deepEqual({name: 'joe'},  {name: 'joe'});
        });

        it('this is a pending test');
    });
});