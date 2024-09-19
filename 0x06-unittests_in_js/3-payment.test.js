const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    // Create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check that Utils.calculateNumber was called once
    expect(spy.calledOnce).to.be.true;

    // Check that it was called with the correct arguments
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy
    spy.restore();
  });
});