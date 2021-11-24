const express   = require("express");   //Importamos la librería de Express.
const app       = express();            //Guadamos la librería en una variable.
const port      = 3000;

// Static Files
app.use(express.static('public'));
app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/js', express.static(__dirname + '/public/js'));
app.use('/public/img', express.static(__dirname + '/public/img'));

//Views
app.use(require('./routes/html'));

app.listen(port, function () {
    console.info("Servidor", port, "en funcionamiento");
});