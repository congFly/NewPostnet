/**
 * Created by fcc on 16-8-3.
 */
var request = require('superagent');
request
    .post('localhost:3000/turnBarcode')
    .type('form')         //以表单的形式发送
    .send({'postcode': '12345-8765'})    //相当于一个请求
    //.set('X-API-Key', 'foobar')
    //.set('Accept', 'application/json')
    .end(function (err,res) {
        if (res.ok) {
            console.log('yay got ,' + res.text);
        } else {
            console.log('Oh no! error ,' + res.text);
        }
    });