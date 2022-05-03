const request = require('supertest')
const assert = require('assert')
const app = require('../app')

describe('GET /api/v1/scores', () => {
    it('get all scores ', (done ) => {
        request(app)
            .get('/api/v1/scores')
            .set('Accept', 'application/json')
            .expect(200)
            .end( (err, res) => {
                if(err) return done(err);
                return done()
            })
    })
})