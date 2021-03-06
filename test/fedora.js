var should = require('should')

describe('hasSystemd', function() {
  it('returns true on systemd-friendly system', function(done) {
    require('../index.js')(function (err, systemCtlPath) {
      (err===undefined).should.eql(true);
      (systemCtlPath).should.match(/\/systemctl$/);
      done();
    })
  });
});
