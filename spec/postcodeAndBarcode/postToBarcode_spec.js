/*
/!**
 * Created by fcc on 16-8-1.
 *!/
const postTurnBarcode=require('../../postcodeAndBarcode/postcodeTurnBarcode.js');
const allCodes=require('../../postcodeAndBarcode/allCodes.js');
describe('test postcodeTurnBarcode',function () {
    let postToBarcode=new postTurnBarcode();
    it('get wrong', function () {
        let input = '95723-24568';
        let result = postToBarcode.toBarcode(input);
        expect(result).toEqual('wrong input!');
    });
    it('get wrong', function () {
        let input = '9572';
        let result = postToBarcode.toBarcode(input);
        expect(result).toEqual('wrong input!');
    });

    it('get wrong', function () {
        let input = '957225-8983';
        let result = postToBarcode.toBarcode(input);
        expect(result).toEqual('wrong input!');
    });

    it('get wrong', function () {
        let input = '450-562314';
        let result = postToBarcode.toBarcode(input);
        expect(result).toEqual('wrong input!');
    });

    it('get wrong', function () {
        let input = '45@056789';
        let result = postToBarcode.toBarcode(input);
        expect(result).toEqual('wrong input!');
    });

    it('get true', function () {
        let input = '12121-1212';
        let result = postToBarcode.toBarcode(input);
        expect(result).toEqual('| :::|| ::|:| :::|| ::|:| :::|| :::|| ::|:| :::|| ::|:| |:::| |' );
    });

});*/
