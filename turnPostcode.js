const barcodeTurnPostcode = require('./postcodeAndBarcode/barcodeTurnPostcode');
const postcodeTurnBarcode = require('./postcodeAndBarcode/postcodeTurnBarcode.js');
// var cors = require('cors');

let express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());

app.post('/turnPostcode', function (req, res) {
    let codes = req.body.barcode;
    let postcode = new barcodeTurnPostcode().toPostcode(codes);
    res.send(postcode);
});

app.post('/turnBarcode', function (req, res) {
    let input = req.body.postcode;
    let barcode = new postcodeTurnBarcode().toBarcode(input);
    res.send(barcode)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;