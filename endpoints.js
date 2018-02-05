const express = require('express');

const example = require('./endpoints/exampleEndpoint');

function createEndpoints() {
    const router = express.Router();

    // Initialize route handlers...
    router.get('/hello', example.helloHandler);
    router.get('/throw', example.throwingHandler);
    router.get('/async/hello', example.asyncHelloHandler);
    router.get('/async/throw', example.asyncThrowingHandler);

    router.get('/slowpoke', (req, res) => {
        let i = 10e9;
        while(i) i = i - 1;
        res.send("Done");
    })

    return router;
}

module.exports = createEndpoints;