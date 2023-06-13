const assert = require('assert')

const Rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const result = Rooster.announceDawn();
      assert.strictEqual(expected, result);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const expected = '7';
      const result = Rooster.timeAtDawn(7);
      assert.strictEqual(expected, result);
    });
    it('throws an error if passed a number less than 0', () => {
      assert.throws(() => {
        Rooster.timeAtDawn(-1);
      },
      RangeError
      );
    });
    it('throws an error if passed a number greater than 23', () => {
      assert.throws(() => {
        Rooster.timeAtDawn(24);
      },
      RangeError
      );
    });
  });
});