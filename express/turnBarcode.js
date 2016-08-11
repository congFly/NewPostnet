/*
const postcodeTurnBarcode = require('./../postcodeAndBarcode/postcodeTurnBarcode.js');
let express = require('express');

let bodyParser = require('body-parser');
let app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.get('/barcode', function (req, res) {
//    let barcode=new postcodeTurnBarcode().toBarcode(req.query.code);
//    res.send(barcode);
//  });
app.post('/turnBarcode', function (req, res) {
    let input = req.body.postcode;
    let barcode = new postcodeTurnBarcode().toBarcode(input);
    res.send(barcode)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;*/
