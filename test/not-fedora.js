var should = require('should')

describe('hasSystemd', function() {
  it('returns false on non systemd-friendly system', function(done) {
    require('../index.js')(function (err, systemCtlPath) {
      (err===undefined).should.be.false;
      (systemCtlPath===undefined).should.be.true;
      done();
    })
  });
});
