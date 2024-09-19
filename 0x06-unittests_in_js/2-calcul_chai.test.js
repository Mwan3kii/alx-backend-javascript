const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -5 when inputs are -1.4 and -3.6', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
    });

    it('should return 0 when inputs are 0 and 0', function() {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are -1.4 and -3.6', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.6), 3);
    });

    it('should return 0 when inputs are 0 and 0', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when the second input is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return -0.5 when inputs are 1 and -2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, -2), -0.5);
    });
  });
});
