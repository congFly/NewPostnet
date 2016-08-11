/**
 * Created by fcc on 16-7-31.
 */
'use strict';

const postcodeTurnBarcode = require('../postcodeAndBarcode/postcodeTurnBarcode.js');
let postToBarcode=new postcodeTurnBarcode();
class postcodeTurnBarcodePage {
    constructor() {
        this.name = 'postcodeTurnBarcodePage';
        this.help = '1-返回上一层\n2-返回出始界面\nq-退出\n—请输入postcode：(eg:95713/95743-1423)';
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'changePage';
            case '2':
                return 'initPage';
            case 'q':
                // replServer.close();
                process.exit(0);
            // return;
            default:
                let input = postToBarcode.toBarcode(cmd);
                console.log(input);
                return 'changePage';
        }
    }
}
module.exports = postcodeTurnBarcodePage;