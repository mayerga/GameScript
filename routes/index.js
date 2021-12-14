const express   = require("express");   //Importamos la librería de Express.
const routes    = express();            //Guadamos la librería en una variable.

// Static Files
routes.use(express.static('public'));
routes.use('/public/css', express.static(__dirname + '/public/css'));
routes.use('/public/js', express.static(__dirname + '/public/js'));
routes.use('/public/img', express.static(__dirname + '/public/img'));

routes.use()

module.exports = routes;