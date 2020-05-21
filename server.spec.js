const request = require('supertest');

const server = require('./server.js');
const router = require('./api/descriptions-router.js');

describe('GET /', () => {
    it('has process.env DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    it('has status code of 200', () => {
        return request(server).get('/')
            .expect(200)
            .expect('content-type', /json/)
            .then(res => {
                expect(res.body.message).toBe("API is up and running")
            });
    });
});

server.use('/api/descriptions', router);

//get descriptions tests
describe('GET /', () => {

    it('has status code of 200 and returns data', () => {
        return request(server).get('/api/descriptions')
            .expect(200)
            .expect('content-type', /json/)
            .then(res => {
                expect(res.body.data[0].id).toBe(1)
            })
    });
});

//add descriptions tests
describe('POST /', () => {

    it('has status code of 201 and success message', () => {
        return request(server).post('/api/descriptions')
            .send({description: 'fun'})
            .expect(201)
    });
});

//remove descriptions tests
describe('DELETE /:id', () => {
    it('has a status code of 200 and delete message', () => {
        return request(server).delete('/api/descriptions/2')
            .expect(200)
    })
})

