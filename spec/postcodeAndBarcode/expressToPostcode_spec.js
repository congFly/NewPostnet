/**
 * Created by fcc on 16-8-3.
 */
let turnPostcode = require('.././turnPostcode');
let request = require('supertest');
let should = require('should');

describe('test turnPostcode', function () {
    it('should show turnPostcode', function () {
        request(turnPostcode)
            .post('/turnPostcode')
            .send({barcode: '| ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| |'})
            .end(function (err, res) {
                res.text.should.equal('01201-2');
            });
    });
});
