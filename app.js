//DEPENDENCIAS EXTERNAS
const express   = require('express'); 
const path      = require('path');
const mongoose  = require('mongoose');
const session   = require('express-session');
const passport  = require('passport');

//DEPENDENCIAS PROPIAS
const views     = require('./routes/index-routes');
const users     = require('./controllers/user-controller');
const salas     = require('./controllers/sala-controller');
const port      = 3000;

//INICIALIZACIÓN
const app       = express();
require('./config/passport');

//CONECCIÓN A LA BBDD
mongoose.connect('mongodb://localhost/GameScript_DB')
    .then(() => console.log('Se ha conectado correctamente a la base de datos de GameScript'))
    .catch(err => console.log('No se pudo conectar con la base de datos de GameScript.', err));

//PUBLIC
app.use(views);
app.use(express.static(path.join(__dirname, '/public')));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
app.use("/public/img", express.static(__dirname + "/public/img"));

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
    //store: MongoStore.create({ mongoUrl: config.MONGODB_URI }),
}))
app.use(passport.initialize());
app.use(passport.session());

//RUTAS
app.use(users);
app.use(salas);

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