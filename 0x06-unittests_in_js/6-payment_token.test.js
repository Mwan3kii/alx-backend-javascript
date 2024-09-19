const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return the expected data when success is true', function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      try {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the test is complete
      } catch (error) {
        done(error); // Pass the error to done if the assertion fails
      }
    }).catch(done); // Handle any promise rejections
  });

  it('should return undefined when success is false', function(done) {
    getPaymentTokenFromAPI(false).then(response => {
      try {
        expect(response).to.be.undefined; // Since nothing is resolved, we expect undefined
        done(); // Indicate that the test is complete
      } catch (error) {
        done(error); // Pass the error to done if the assertion fails
      }
    }).catch(done); // Handle any promise rejections
  });
});