const express   = require("express");   //Importamos la librería de Express.
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app       = express();            //Guadamos la librería en una variable.
const port      = 3000;

const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Static Files
app.use(express.static('public'));
app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/js', express.static(__dirname + '/public/js'));
app.use('/public/img', express.static(__dirname + '/public/img'));
app.use('/users', usersRouter);


//Views
app.use(require('./routes/html'));

app.listen(port, function () {
    console.info("Servidor", port, "en funcionamiento");
});


//Preguntar qué significa
module.exports = app;