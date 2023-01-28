const { beforeEach } = require('mocha');
const req = require('supertest');
const app = require('../index.js');
const Customer = require('../database/schemas/customer.js');
const { expect } = require('chai');

const initialCustomers = [
    {
        name: 'Testi Testaaja'
    },
    {
        name: 'Testi Testaaja 2'
    }
]

beforeEach(async () => {
    await Customer.deleteMany({});
    let customerObject = new Customer(initialCustomers[0]);
    await customerObject.save();
    customerObject = new Customer(initialCustomers[1]);
    await customerObject.save();
});

describe('/customers', () => {
    it('GET returns initial customers', async () => {
        const res = await req(app).get('/customers')

        expect(res.statusCode).to.equal(200);
        expect(res.body.length).to.equal(2);
        expect(res.body[0].name).to.equal(initialCustomers[0].name);
        expect(res.body[1].name).to.equal(initialCustomers[1].name);

    })

    it('POST adds a new customer', async () => {
        const newCustomer = {
            name: 'Testi Testaaja 3'
        }

        const res = await req(app).post('/customers').send(newCustomer);

        expect(res.statusCode).to.equal(201);
        expect(res.body.name).to.equal(newCustomer.name);
    })
});

