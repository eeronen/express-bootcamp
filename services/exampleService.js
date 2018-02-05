const BPromise = require('bluebird');


function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

function waitAndSayHello(name) {
    return BPromise.delay(1500)
        .then(() => sayHello(name));
}

function throwError() {
    throw(new Error("Oops, this is an example error"));    
}

function waitAndThrowError() {
    return BPromise.delay(1500)
        .then(() => throwError());
}


module.exports = {
    sayHello,
    waitAndSayHello,
    throwError,
    waitAndThrowError
}