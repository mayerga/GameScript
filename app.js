const express = require("express"); //Importamos la librería de Express.
const app = express(); //Guadamos la librería en una variable.
const port = 3000;
const server = require("http").Server(app);
const io = require("socket.io")(server);
// Static Files
app.use(express.static("public"));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
app.use("/public/img", express.static(__dirname + "/public/img"));

//Views
app.use(require("./routes/html"));

io.on("connection", function(socket)  {


    console.log("Alguien se ha conectado con Sockets")
 

  socket.emit("messages", function(){

    print("Bienvenido a nuestro Juego");
    
  });
});

server.listen(port, function () {
  console.info("Servidor", port, "en funcionamiento");
});
