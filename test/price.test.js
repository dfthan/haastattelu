const { expect } = require('chai');
const calculatePrice = require('../lib/calculatePrice.js');


describe('calculatePrice', () => {
    it('discountOption modifiers work', () => {
        const price = 1000;
        const discountOptions = {
            "discount": 0.1123123,
            "quantity": 50,
            "month": 4
        }

        const resultPrice = calculatePrice(price, discountOptions);
        expect(resultPrice).to.equal(785.35);
    });

    it('number 0 if no parameters at all', () => {
        const resultPrice = calculatePrice();
        expect(resultPrice).to.equal(0);
    });

    it('product price no discount modifiers', () => {
        const resultPrice = calculatePrice(10);
        expect(resultPrice).to.equal(10);
    });

})