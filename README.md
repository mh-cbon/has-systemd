# has-launchd

Tells if linux [systemd](https://en.wikipedia.org/wiki/Systemd) is available.

## Usage

```js
require('@mh-cbon/has-systemd')(function (err, systemCtlPath) {
  console.log("This system runs systemd : %s", err?"no":"yes");
  systemCtlPath && console.log("Found systemdctl at path : %s", systemCtlPath)
})
```

## Testing

#### systemd friendly

To run the __systemd friendly__ tests on a fedora-like box,

- download and install [vagrant](https://www.vagrantup.com/)
- execute `npm run test-fedora`


#### systemd non friendly
To run the __systemd non friendly__ tests on a fedora-like box,

- download and install `vagrant`
- execute `npm run test-not-fedora`

or just

- download and install `mocha`
- `mocha test/not-fedora.js`
