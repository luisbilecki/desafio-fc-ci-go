import assert from 'assert';
import Soma from '../src/index.js';

describe('Index Suite', function() {
    it('should correct return the sum of two values', function() {
        assert.equal(Soma(15, 15), 30);
    });
});