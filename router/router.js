//módulos de enrutado
const fs=require('fs');
const HTML_CONTENT_TYPE="text/html";
const CSS_CONTENT_TYPE="text/css";
const PNG_CONTENT_TYPE="image/png";

exports.init = function(req,res){
  res.statusCode = 200;


  //Path
  const path=req.url;
  console.log(path);

  //enrutado

  if(path==="/"){
    res.setHeader('Content-Type', HTML_CONTENT_TYPE);
    const index=fs.readFile(__dirname+'/../public/index.html',(err,data)=>{
        if(err){
            console.log("Error en la carga del index.html");
            res.end("error en la carga del index.html");
        }else{
            res.end(data);
        }
      });
  }else if(path.match()){
    res.setHeader('Content-Type', CSS_CONTENT_TYPE);
    const css=fs.readFile(__dirname+'/../public/estilos.css',(err,data)=>{
        if(err){
            console.log("Error en la carga de estilos.css");
            res.end("error en la carga de"+path);
        }else{
            res.end(data);
        }
      });
  }else if(path.match()){
    res.setHeader('Content-Type', PNG_CONTENT_TYPE);
    const css=fs.readFile(__dirname+'/../public/',(err,data)=>{
        if(err){
            console.log("Error en la carga ");
            res.end("error en la carga de"+path);
        }else{
            res.end(data);
        }
      });
  }else{
    res.setHeader('Content-Type', HTML_CONTENT_TYPE);
    res.end("ERROR 404");
  }
}    