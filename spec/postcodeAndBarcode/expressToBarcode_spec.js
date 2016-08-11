/**
 * Created by fcc on 16-8-3.
 */
let turnBarcode = require('.././turnBarcode');
let request = require('supertest');
let should = require('should');

describe('test turnBarcode', function () {
    it('should show turnBarcode', function () {
        request(turnBarcode)
            .post('/turnBarcode')
            .send({postcode: '01201-2'})
            .end(function (err, res) {
                res.text.should.equal('| ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| |');
            });
    });
});

