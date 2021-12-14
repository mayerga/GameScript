const express   = require("express");   //Importamos la librería de Express.
const router    = require("./routes")
const app       = express();            //Guadamos la librería en una variable.
const port      = 3000;

app.use(router);

app.listen(port, function () {
    console.info("Servidor", port, "en funcionamiento");
});