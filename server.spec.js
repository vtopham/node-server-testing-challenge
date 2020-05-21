const request = require('supertest')

const server = require('./server.js')

describe('GET /', () => {
    it('has process.env DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    it('has status code of 200', () => {
        return request(server).get('/')
            .expect(200)
    })
});