/*
/!**
 * Created by fcc on 16-8-1.
 *!/
'use strict';
const barTurnPostcode=require('../../postcodeAndBarcode/barcodeTurnPostcode.js');
const allCodes=require('../../postcodeAndBarcode/allCodes.js');
describe('test barcodeTurnPostcode',function () {
    let barToPostcode=new barTurnPostcode();
    it('get true', function () {
        let codes = '| ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('01201-2');
    });

    it('get true', function () {
        let codes = '| ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| ||::: :::|| ||::: :::|| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('01201-24010');
    });

    it('get true', function () {
        let codes = '| ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| ||::: :::|| ::|:| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('01201-2401');
    });

    it('get wrong', function () {
        let codes = '| r|::: :::|| ::|:| ||::: :::|| ::|:| :|::| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

    it('get wrong', function () {
        let codes = '| |::: :::||';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

    it('get wrong', function () {
        let codes = '|::: :::||';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

    it('get wrong', function () {
        let codes = '||| ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

    it('get wrong', function () {
        let codes = '$ ||::: :::|| ::|:| ||::: :::|| ::|:| :|::| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

    it('get wrong', function () {
        let codes = '|##||::: :::|| ::|:| ||::: :::|| ::|:| :|::| |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

    it('get wrong', function () {
        let codes = '|%|:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = barToPostcode.toPostcode(codes);
        expect(result).toEqual('input wrong!');
    });

});
*/
