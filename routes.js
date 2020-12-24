const routes = require('next-routes')(); 

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new')

module.exports = routes;

//function will be evoked after running this file
//routes.add('...', '...'); //only set up for custom token

//server.js boots up next app and tell it to use routes.js, routes.js defines our diff routes
