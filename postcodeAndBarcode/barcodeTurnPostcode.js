/**
 * Created by fcc on 16-7-31.
 */
// let allCodes = require('./allCodes.js');
class barcodeToPostcode {
    toPostcode(codes){
        if(isValue(codes)&&hasFrame(codes)){
            let allCodes=loadAllCodes();
            let splitCode=splitCodes(codes);
            let nums=matchNums(splitCode, allCodes);
            let num=getInspectionCode(nums);
            let postcode=getFinalNum(num);
            return postcode;
        }else {
            return 'input wrong!';
        }
    }
}

function loadAllCodes() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

function isValue(codes) {
        let bool = true;
        for (let i of codes) {
            if (i !== '|' && i !== ' ' && i !== ':') {
                return bool = false;
            }
        }
        return bool;
    }

function hasFrame(codes) {
        let bool = false;
        let arr = codes.split('');
        if (arr[0] === '|' && arr[1] === ' ' && arr[arr.length - 1] === '|' && arr[arr.length - 2] === ' ') {
            bool = true;
        }
        return bool;
    }

function splitCodes(codes) {
        let temp = codes.split(' ');
        let splitCode = temp.slice(1, temp.length - 1);
        return splitCode;
    }

function matchNums(splitCode, allCodes) {
        let nums = [];
        splitCode.filter(function (code) {
            for (let i = 0; i < allCodes.length; i++) {
                if (code === allCodes[i]) {
                    nums.push(i);
                }
            }
        });
        return nums;
    }

function getInspectionCode(nums) {
        let num = nums.slice(0, nums.length - 1);
        return num;
    }

function getFinalNum(num) {
        num = num.join('');
        let str = num.substring(0, 5);
        let str1 = num.substring(5, num.length);
        if (num.length <= 5) {
            return str;
        } else {
            return str + '-' + str1;
        }
    }

module.exports = barcodeToPostcode;
