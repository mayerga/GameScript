//Cliente de mongo
var MongoClient = require('mongodb').MongoClient;

//base de datos
var db = null;

//Funcion de conexion con la base de datos
module.exports.connect = function(url,callback){
    //si ya esta conectado, no se vuelva a conectar
    if(db){
        return callback();
    }

    //crear instancia de cliente de mongo
    const client = new MongoClient(url,{useNewUrlParser: true});

    //conectar el cliente al servidor
    client.connect(function (err,result){
        if(err){
            return callback(err);
        }
        console.log("Conectado a la base de datos");
        db = result;
        callback();
    });

};

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

//funcion para obtener el cliente conectado
module.exports.get = function(){
    return db;
}