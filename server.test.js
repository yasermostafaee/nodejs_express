const request = require('supertest')
const myApp = require('./server')

describe('server', () => {

    it('get request', (done) => {
        request(myApp.app)
            .get('/')
            .expect(500)
            .end(done)
    })
})