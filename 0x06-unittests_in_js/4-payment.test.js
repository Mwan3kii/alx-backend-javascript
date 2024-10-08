const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const spyD = sinon.spy(console);
    const stubD = sinon.stub(Utils, 'calculateNumber');

    stubD.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubD.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubD.callCount).to.be.equal(1);
    expect(spyD.log.calledWith('The total is: 10')).to.be.true;
    expect(spyD.log.callCount).to.be.equal(1);
    stubD.restore();
    spyD.log.restore();
  });
});