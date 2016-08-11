/**
 * Created by fcc on 16-7-31.
 */
let allCodes = require('./allCodes.js');
class postcodeToBarcode {
   toBarcode(input){
       if(judge1(input)){
           let allCodes=loadAllCodes();
           let splitNum=splitNums(input);
           let checkCodes=getCheckCodes(splitNum);
           let codes=matchInput(checkCodes,allCodes);
           let barcode=getStr(codes);
           return barcode;
       }else {
           return 'wrong input!';
       }
   }
}

function loadAllCodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function judge1(input) {
    return (/^\d{5}(-?\d{4})?$/.test(input));
}

function splitNums(input) {
    let splitTemp = input.split('');
    let splitNum = splitTemp.filter(info=>info !== "-");
    return splitNum;
}

function getCheckCodes(splitNum) {
    let checkCodes = splitNum.map(function (num) {
        return parseInt(num);
    });
    let sum = checkCodes.reduce(function (a, b) {
        return a + b;
    });
    if (sum % 10 !== 0) {
        checkCodes.push(10 - sum % 10);
    } else {
        checkCodes.push(0);
    }
    return checkCodes;
}

function matchInput(checkCodes, allCodes) {
    let codes = [];
    checkCodes.filter(function (code) {
        for (let i = 0; i < allCodes.length; i++) {
            if (code === i) {
                codes.push(allCodes[i]);
            }
        }
    });
    return codes;
}

function getStr(codes) {
    codes = codes.join(' ');
    return '| ' + codes + ' |';
}


module.exports = postcodeToBarcode;