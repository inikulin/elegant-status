# elegant-status
[![Build Status](https://api.travis-ci.org/inikulin/elegant-status.svg)](https://travis-ci.org/inikulin/elegant-status)

*Create elegant task status for CLI.*


```js
const elegantStatus = require('elegant-status');

const done = elegantStatus('Perform assessment');

setTimeout(() => done(true), 1000);
```

 ⬇

![success](https://raw.githubusercontent.com/inikulin/elegant-status/master/media/success.gif)


----


```js
const elegantStatus = require('elegant-status');

const done = elegantStatus('Set defense systems');

setTimeout(() => done(false), 1000);
```

 ⬇

![success](https://raw.githubusercontent.com/inikulin/elegant-status/master/media/fail.gif)


## Install
```
npm install elegant-status
```

## Author
[Ivan Nikulin](https://github.com/inikulin) (ifaaan@gmail.com)
