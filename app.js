//DEPENDENCIAS EXTERNAS
const express   = require('express'); 
const path      = require('path');
const mongoose  = require('mongoose');

//DEPENDENCIAS PROPIAS
const views     = require('./routes/index-routes');
const users     = require('./controllers/user-controller');
const salas     = require('./controllers/sala-controller');
const port      = 3000;

//INICIALIZACIÓN
const app       = express();

//CONECCIÓN A LA BBDD
mongoose.connect('mongodb://localhost/GameScript_DB')
    .then(() => console.log('Se ha conectado correctamente a la base de datos de GameScript'))
    .catch(err => console.log('No se pudo conectar con la base de datos de GameScript.', err));

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//RUTAS
app.use(views);
app.use(users);
app.use(salas);

//PUBLIC
app.use(express.static(path.join(__dirname, '/public')));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
app.use("/public/img", express.static(__dirname + "/public/img"));


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ¿CERRAR CONECCIÓN?
//funcion parar cerrar la conexion con la base de datos
module.exports.close = function(callback){
    if(db){
        db.close(function(err,result){
            console.log("Desconectado de la base de datos");
            db=null;
            callback(err);
        });
    }
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//CONECCIÓN CLIENTE-SERVIDOR
app.listen(port, () => {
  console.info("Servidor", port, "en funcionamiento");
});


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ¿SOCKET-IO?
const server        = require("http").Server(app);
const io            = require("socket.io")(server);

io.on("connection", function(socket)  {
    console.log("Alguien se ha conectado con Sockets")
  /*socket.emit("messages", function(){    
  });*/
  socket.on("chat:message", (data) => {
    io.sockets.emit("chat:message", data);
 });
 socket.on("chat:typing", (data) => {
     socket.broadcast.emit("chat:typing", data);
 })
});