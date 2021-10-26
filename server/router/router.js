/*Fichero para generar o analizar las peticiones que nos lleguen del usuario*/
//Modulo dentro de enrutado
const fs = require("fs");
const INDEX_CONTENT_TYPE = "text/html";
const HTML_CONTENT_TYPE = "text/html";
const CSS_CONTENT_TYPE = "text/css"
const IMG_CONTENT_TYPE = "text/img"
const JS_CONTENT_TYPE = "text/js"

exports.init = function (req, res) {
  res.statusCode = 200;

  //path
  const path = req.url;

  //Enrutado
  if (path === "/") {
    res.setHeader("Content-Type", INDEX_CONTENT_TYPE);
    const index = fs.readFile(
      `${__dirname}/../../public/html/1_index.html`,
      (err, data) => {
        if (err) {
          console.log("error en la carga de index.html");
          res.end("error en la carga");
        } else {
          res.end(data);
        }
      }
    );
  }

  //Añadido elementos carpeta HTML
  else if (path.match("\.html$")) {
    res.setHeader("Content-Type", HTML_CONTENT_TYPE);
      const html = fs.readFile(
        `${__dirname}/../../`+path,
        (err, data) => {
          if (err) {
            console.log("error al cargar el archivo de HTML");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
  }

  //Añadido elementos carpeta PNG
  else if (path.match("\.png$")){
    res.setHeader("Content-Type",IMG_CONTENT_TYPE);
      const png = fs.readFile(
        `${__dirname}/../../`+path,
        (err, data) => {
          if (err) {
            console.log("error en la carga de IMG.jpg");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
  }

  //Añadido elementos carpeta JPG
  else if (path.match("\.jpg$")){
    res.setHeader("Content-Type",IMG_CONTENT_TYPE);
      const jpg = fs.readFile(
        `${__dirname}/../../`+path,
        (err, data) => {
          if (err) {
            console.log("error en la carga de IMG.png");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
  }

  //Añadido elementos carpeta CSS
  else if (path.match("\.css$")){
    res.setHeader("Content-Type",CSS_CONTENT_TYPE);
      const css = fs.readFile(
        `${__dirname}/../../`+path,
        (err, data) => {
          if (err) {
            console.log("error al cargar el archivo CSS");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
 }

  //Añadido elementos carpeta JS
  else if (path.match("\.js$")){
    res.setHeader("Content-Type",JS_CONTENT_TYPE);
      const js = fs.readFile(
        `${__dirname}/../../`+path,
        (err, data) => {
          if (err) {
            console.log("error en la carga de JavaScript");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
 }

  else {
    res.setHeader("Content-Type", JS_CONTENT_TYPE);
    res.end("Otra Cualquiera");
  }
};
