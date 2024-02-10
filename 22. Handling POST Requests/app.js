const express = require('express');
const bodyParser = require('body-parser');

let app = express();

let urlencodeParser = bodyParser.urlencoded({ extended: false }); // middleware to pass POST data

app.listen(3000);

app.set('view engine', 'ejs');

// app.use('/assets', function(req, res, next){
//     console.log(req.url);
//     next();
// });

// app.use('/assets', express.static('assets'));
app.use('/assets', express.static('stuff')); // only fire when get req.url = /assets

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodeParser, function(req, res){
    // urlencodeParser will store the POST data to req, and to access it use req.body
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    let data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});