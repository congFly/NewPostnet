/*
/!**
 * Created by fcc on 16-8-1.
 *!/
'use strict';
const InitAction = require('../../action/initPage.js');
const changeAction = require('../../action/changePage.js');
const barToPostcodeAction = require('../../action/barcodeTurnPostcodePage.js');
const postToBarcodeAction = require('../../action/postcodeTurnBarcodePage.js');
describe("initPage", function () {
    let initPage = new InitAction();
    it("test initPage 1", function () {
        let cmd = "1";
        spyOn(console, 'log');
        let result = initPage.doAction(cmd);
        let expectResult = "changePage";
        expect(result).toEqual(expectResult);
    });

    it("test initPage default", function () {
        let cmd = "4";
        spyOn(console, 'log');
        let result = initPage.doAction(cmd);
        let expectResult = "initPage";
        expect(result).toEqual(expectResult);
    });
});


describe("changePage", function () {
    let changePage = new changeAction();
    it("test initPage 1", function () {
        let cmd = "1";
        let result = changePage.doAction(cmd);
        let expectResult = "postcodeTurnBarcodePage";
        expect(result).toEqual(expectResult);
    });

    it("test changePage 2", function () {
        let cmd = "2";
        let result = changePage.doAction(cmd);
        let expectResult = "barcodeTurnPostcodePage";
        expect(result).toEqual(expectResult);
    });

    it("test changePage 3", function () {
        let cmd = "3";
        let result = changePage.doAction(cmd);
        let expectResult = "initPage";
        expect(result).toEqual(expectResult);
    });

    it("test changePage default", function () {
        let cmd = "5";
        spyOn(console, 'log');
        let result = changePage.doAction(cmd);
        let expectResult = "changePage";
        expect(result).toEqual(expectResult);
    });
});

describe("barcodeTurnPostcodePage", function () {
    let barToPostPage = new barToPostcodeAction();
    it("test barcodeTurnPostcodePage 1", function () {
        let cmd = "1";
        let result = barToPostPage.doAction(cmd);
        let expectResult = "changePage";
        expect(result).toEqual(expectResult);
    });

    it("test barcodeTurnPostcodePage 2", function () {
        let cmd = "2";
        let result = barToPostPage.doAction(cmd);
        let expectResult = "initPage";
        expect(result).toEqual(expectResult);
    });

    it("test barcodeTurnPostcodePage default", function () {
        let cmd = "3";
        spyOn(console, 'log');
        let result = barToPostPage.doAction(cmd);
        let expectResult = "changePage";
        expect(result).toEqual(expectResult);
    });

});

describe("postcodeTurnBarcode", function () {
    let postToBarcode = new postToBarcodeAction();
    it("test postcodeTurnBarcode 1", function () {
        let cmd = "1";
        let result = postToBarcode.doAction(cmd);
        let expectResult = "changePage";
        expect(result).toEqual(expectResult);
    });

    it("test postcodeTurnBarcode 2", function () {
        let cmd = "2";
        let result = postToBarcode.doAction(cmd);
        let expectResult = "initPage";
        expect(result).toEqual(expectResult);
    });

    it("test postcodeTurnBarcode default", function () {
        let cmd = "3";
        spyOn(console, 'log');
        let result = postToBarcode.doAction(cmd);
        let expectResult = "changePage";
        expect(result).toEqual(expectResult);
    });

});

*/
