const request = require('supertest');

const createApp = require('../app');

const app = createApp();
describe('GET /example/hello', () => {
    it('responds with 200 OK', done => {
        request(app)
            .get('/example/hello')
            .expect(200, done)
    });
})

describe('GET /hello', () => {
    it('responds with 200 OK', done => {
        request(app)
            .get('/hello')
            .expect(200, done)
    });

    it('responds with a custom name', done => {
        request(app)
            .get('/hello')
            .send({ name: "Tiffany" })
            .expect(200)
            .expect('Hello, Tiffany!', done);
    });
});

describe('POST /hello', () => {
    it('responds with 400 when no body given', done => {
        request(app)
            .post('/hello')
            .expect(400, done)
    });

    it('responds with a custom name', done => {
        request(app)
            .post('/hello')
            .send({ name: "Tiffany" })
            .expect(200)
            .expect('Hello, Tiffany!', done);
    });
});

describe('GET /example/async/throw', () => {
    it('handles the asynchronous error and responds in a timely manner', () => {
        return request(app)
            .get('/example/async/throw')
            .timeout({
                response: 1800,
                deadline: 1800
            })
            .expect(500)
    });
})