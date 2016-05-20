var elegantStatus = require('./');

var done = elegantStatus('Perform assessment');

setTimeout(function () {
    done.updateText('2 seconds left');
}, 1000);

setTimeout(function () {
    done.updateText('1 second left');
}, 2000);

setTimeout(function () {
    done(true);

    done = elegantStatus('Set defense systems');

    setTimeout(function () {
        done(false);
    }, 4000);
}, 3000);
