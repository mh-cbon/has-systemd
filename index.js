var spawn = require('child_process').spawn;

function hasSystemd (then) {
  if (!process.platform.match(/(linux|freebsd|sunos)/)) return process.nextTick(function () {
    then('not compatible')
  });

  var s = spawn('which', ['systemctl'], {stdio: 'pipe'})

  var systemctlPath;
  s.stdout.on('data', function (data) {
     systemctlPath = data.toString().replace(/\s*$/, '');
  })

  s.on('close', function (code) {
     if (code===0) return then (undefined, systemctlPath)
     then('not found')
  })
}

module.exports = hasSystemd;
