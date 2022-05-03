const request = require('supertest')
const assert = require('assert')
const app = require('../app')
const { response } = require('../app')

describe('/api/v1/scores', () => {

    it('get all scores ', async ( ) => {

        await request(app)
            .get('/api/v1/scores')
            .set('Accept', 'application/json')
            .expect(200)
    })

    it('add new score', async () => {

        await request(app)
            .post('/api/v1/scores')
            .send({score: 10, level: 2,speed: "FAST"})
            .expect('Content-Type', /json/)
            .expect(200)
    })

})

describe('score statistics', () => {
    it('GET /get-top-10 ', async () => {

        await request(app)
            .get('/api/v1/scores/get-top-10')
            .set('Accept', 'application/json')
            .expect(200)
    })

    it('GET /get-top-10 return length 10', async () => {

        await request(app)
            .get('/api/v1/scores/get-top-10')
            .set('Accept', 'application/json')
            .expect(200)
            .then( response => {
                assert(response.data.length, 10)
            })

    })

    it('GET /score-statistics ', async () => {

        await request(app)
            .get('/api/v1/scores/get-score-statistics')
            .set('Accept','application/json')
            .expect(200)
    })

    it('GET /score-statistics return max gtr 0', async () => {
        
        await request(app)
            .get('/api/v1/scores/get-score-statistics')
            .set('Accept','application/json')
            .expect(200)
            .then( response => {
                assert(response.data.length, 1)
            })
    } )
})