const express = require("express"); //Importamos la librería de Express.
const app = express(); //Guadamos la librería en una variable.
const port = 3000;
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path=require('path');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const User = require("./model/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Static Files
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static("public"));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
app.use("/public/img", express.static(__dirname + "/public/img"));

const mongo_uri='mongodb://localhost:27017/db';
mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    }else{
        console.log('Se ha conectado correctamente a la base de datos');
    }
})
app.post('/register',(req,res)=>{
    const {username,password}=req.body;
    const user=new User({username,password});
    user.save(err =>{
        if (err){
            res.status(500).send('ERROR AL REGISTRAR USUARIO');
        }else{
            res.status(200).send('USUARIO REGISTRADO CORRECTAMENTE');
        }

    });

});
app.post('/authenticate',(req,res)=>{
    const{username,password}=req.body;
    User.findOne({username},(err,User)=>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }else if(!User){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            User.isCorrectPassword(password,(err,result)=>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
        }
    });

});

//Views
app.use(require("./routes/html"));
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

server.listen(port, function () {
  console.info("Servidor", port, "en funcionamiento");
});
