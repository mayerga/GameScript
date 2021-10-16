//Modulo dentro de enrutado
const fs = require('fs');
const HTML_CONTENT_TYPE ="text/html";

exports.init = function(req,res){
res.statusCode = 200;
res.setHeader('Content-Type', HTML_CONTENT_TYPE);
const index = fs.readFile(`${__dirname}/../public/index.html`, (err, data) => {
    if(err){
        console.log("error en la carga de index.html");
        res.end("error en la carga");
       
    }else{
        res.end(data);
    }
  });

}