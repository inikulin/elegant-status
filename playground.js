var elegantStatus = require('./');

var done = elegantStatus('Perform assessment');

setTimeout(function () {
    done(true);

    done = elegantStatus('Set defense systems');

    setTimeout(function () {
        done(false);
    }, 4000);
}, 3000);
