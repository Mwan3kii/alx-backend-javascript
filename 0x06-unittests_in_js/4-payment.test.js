const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./4-payment');
const { calculateNumber } = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let stub;
  let spy;

  beforeEach(function() {
    // Stub the calculateNumber function to always return 10
    stub = sinon.stub(calculateNumber, 'calculateNumber').returns(10);

    // Spy on console.log to verify the message
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the stub and the spy
    stub.restore();
    spy.restore();
  });

  it('should call calculateNumber with SUM and correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});