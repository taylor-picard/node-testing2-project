const request = require('supertest');
const db = require('../data/db-config');
const server = require('../server');

const name1= {firstName: 'Jane', lastName: 'Smith'}
const name2= {firstName: 'Jennifer', lastName: 'Anniston'}

beforeAll(async ()=> {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=> {
    await db('names').truncate()
})

it("test env var", ()=> {
    expect(process.env.DB_ENV).toBe("testing")
})