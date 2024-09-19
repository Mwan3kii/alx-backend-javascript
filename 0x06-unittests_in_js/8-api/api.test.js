const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const app = require('./api');
const port = 7865;

describe('Index page', () => {
  before((done) => {
    // Start the server before running tests
    app.listen(port, () => {
      console.log(`Test server running on port ${port}`);
      done();
    });
  });

  after((done) => {
    // Close the server after tests
    app.close(done);
  });

  it('should return status code 200', (done) => {
    request(`http://localhost:${port}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', (done) => {
    request(`http://localhost:${port}`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should log correct message when server is started', (done) => {
    const spy = sinon.spy(console, 'log');
    
    request(`http://localhost:${port}`, (error, response, body) => {
      expect(spy.calledWith(`API available on localhost port ${port}`)).to.be.true;
      spy.restore();
      done();
    });
  });
});