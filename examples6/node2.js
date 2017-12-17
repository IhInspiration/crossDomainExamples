var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', function(req, res, next) {
    // console.log(req.params);
    console.log(req.body);
    res.send('Hello World: ' + req.body.crossTest);
    next();
});

app.listen(2333);
console.log('Receive server is listen at port 2333');