import { expect } from 'chai'; // Correct import for chai expect
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return -5 when inputs are -1.4 and -3.6', function () {
      expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5);
    });

    it('should return 0 when inputs are 0 and 0', function () {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 when inputs are -1.4 and -3.6', function () {
      expect(calculateNumber('SUBTRACT', -1.4, -3.6)).to.equal(3);
    });

    it('should return 0 when inputs are 0 and 0', function () {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when the second input is 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return -0.5 when inputs are 1 and -2', function () {
      expect(calculateNumber('DIVIDE', 1, -2)).to.equal(-0.5);
    });
  });
});
