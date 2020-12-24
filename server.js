const {createServer } = require('http');
const next = require('next');
//tells our app to look at global environment app vairable to see if its set to production mode
//if it is app is in production mode

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(3000, err => {
        if (err) throw err;
        console.log('ready on localhost:3000');
    });
});
//set up app tells it to listen to specific port