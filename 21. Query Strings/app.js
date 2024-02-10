const express = require('express');

let app = express();

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
    // console.log(req.query); // get query string (object) from url (127.0.0.1/contact?dept=marketing&name=joe)
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
    let data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});