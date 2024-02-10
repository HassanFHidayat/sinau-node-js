const express = require('express');

let app = express();

app.listen(3000);

app.get('/', function (req, res) {
    res.send('this is the homepage');
});

app.get('/contact', function (req, res) {
    res.send('this is the contact page');
});

// app.get('/profile/:id', function(req, res){
//     res.send('You requested to see a profile with the id of ' + req.params.id);
// });

app.get('/profile/:name', function(req, res){ //:name from front end/browser/url
    res.send('You requested to see a profile with the name of ' + req.params.name);
});