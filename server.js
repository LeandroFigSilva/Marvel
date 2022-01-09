var express = require('express');
var app = express();
app.use(express.static(__dirname + '/marvelApp'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authozization');
});

app.get('/', function (req, res, next) {
    res.redirect('/heroes');
});
app.listen(8080, 'localhost');
console.log('MyProject Server is Listening on port 8080')