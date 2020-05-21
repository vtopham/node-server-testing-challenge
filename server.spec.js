const request = require('supertest');
const db = require('./db-config')
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

describe('test the api endpoints', () => {
    beforeEach( async() => {
        await db.seed.run();
    })

    //get descriptions tests
    describe('GET /', () => {
        // db.seed.run()
        it('has status code of 200 and returns data', () => {
            return request(server).get('/api/descriptions')
                .expect(200)
                .expect('content-type', /json/)
                .then(res => {
                    
                    const data = res.body.data
                    expect(data.length).toBe(3)
                })
        });
    });

    //add descriptions tests
    describe('POST /', () => {

        it('has status code of 201 and success message', () => {
            return request(server).post('/api/descriptions')
                .send({description: 'fun'})
                .expect(201)
                .then(res => {
                    expect(res.body.id).toBeGreaterThan(0)
                })
        });
    });

    //remove descriptions tests
    describe('DELETE /:id', () => {
        
        
        // db.seed.run()
        it('has a status code of 200 and delete message', () => {
            return request(server).delete('/api/descriptions/1')
                .expect(200)
                .then(res => {
                    expect(res.body.message).toBe(`1 records successfully deleted`)
                })
        });
    });
});