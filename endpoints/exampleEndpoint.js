const exampleService = require('../services/exampleService');

// Takes in a name from a JSON parameter given as the request body
function helloHandler(req, res, next) {
    let name;
    if(req.body !== undefined) {
        name = req.body.name
    }

    res.send(exampleService.sayHello(name));
}

function asyncHelloHandler(req, res, next) {
    let name;
    if(req.body !== undefined) {
        name = req.body.name
    }

    exampleService.waitAndSayHello(name)
        .then(result => res.send(result))
        .catch(next);
}

// This one just throws an error
function throwingHandler(req, res, next) {
    exampleService.throwError();
}

function asyncThrowingHandler(req, res, next) {
    exampleService.waitAndThrowError()
        .then(result => res.send(result));
}

module.exports = {
    helloHandler,
    asyncHelloHandler,
    throwingHandler,
    asyncThrowingHandler
}