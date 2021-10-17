//Modulo dentro de enrutado
const fs = require("fs");
const HTML_CONTENT_TYPE = "text/html";
const CSS_CONTENT_TYPE = "text/css"
const IMG_CONTENT_TYPE = "text/img"

exports.init = function (req, res) {
  res.statusCode = 200;

  //path
  const path = req.url;
  //console.log(path);

  //Enrutado
  if (path === "/") {
    res.setHeader("Content-Type", HTML_CONTENT_TYPE);

    const index = fs.readFile(
      `${__dirname}/../public/index.html`,
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
  //Añadido elementos carpeta IMG P.W
  else if (path.match("\.img$")){
    res.setHeader("Content-Type",IMG_CONTENT_TYPE);
      const css = fs.readFile(
        `${__dirname}/../public/`+path,
        (err, data) => {
          if (err) {
            console.log("error en la carga de IMG");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
  } 
  //Añadido elementos carpeta CSS P.W
  else if (path.match("\.css$")){
    res.setHeader("Content-Type",CSS_CONTENT_TYPE);
      const css = fs.readFile(
        `${__dirname}/../public/`+path,
        (err, data) => {
          if (err) {
            console.log("error en la carga de CSS");
            res.end("error en la carga de" +path);
          } else {
            res.end(data);
          }
        }
      );
      } else {
    res.setHeader("Content-Type", HTML_CONTENT_TYPE);
    res.end("Otra Cualquiera");
  }
};
