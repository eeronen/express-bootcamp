const express = require('express');
// const bodyParser = require('body-parser');

const createEndpoints = require('./endpoints');

function createApp() {
    const app = express();

    // Initialize middleware and router...
    // Authentication
    // E.g. passport

    // Logging
    // E.g. morgan or winston

    // Data parsing and transformation
    // E.g. body-parser
    // app.use(bodyParser.json())

    // Route handling
    app.use('/example', createEndpoints());


    // Error handling middleware
    // It requires a 4 parameter handler
    app.use((err, req, res, next) => {
        console.log("Oops, caught an error: ", err.message);
        res.status(500).send("There seems to have been an error");
    })

    return app;
}

module.exports = createApp;