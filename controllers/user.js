const express   = require('express');
const User      = require("../models/user-model");
const route     = express.Router();

/*TODO: 
    - Falta corregir el GET.
    - Faltan el UPDATE y el DELETE.
    - Aplicar los metodos crud a los objetos.
*/

//DEFINICIÓN DEL VALIDADOR DE PARÁMETROS:

// --------------------------------------------------- //
// ---------------------  CREATE --------------------- //
// --------------------------------------------------- //
//- REST Post  
//- CRUD Create  

route.post('/register', (req, res)=> {
    
    //const {username,password}=req.body;
    const body = req.body;
    
    //VALIDACIÓN
    //TODO: faltan validaciones (OPCIONAL)

    //EJECUCIÓN DEL MÉTODO
    //TODO: Cambiar los SEND por ALERT (OPCIONAL)
    crearUsuario(body)
        .then ( valor => res.status(200).json({ valor }))
        .catch ( err => res.status(400).json({ err }));

});


crearUsuario = async(body) => {

    let user = new User({
        username    : body.username,
        password    : body.password
    });
    
    return await user.save();

};


// --------------------------------------------------- //
// ----------------------  READ ---------------------- //
// --------------------------------------------------- //
//- REST Get
//- CRUD Read 

//¿?¿?¿?¿?¿? -> ¿NO DEBERÍA SER UN GET?
route.post('/login',(req,res)=>{
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



// --------------------------------------------------- //
// ---------------------  UPDATE --------------------- //
// --------------------------------------------------- //
//- REST Put 
//- CRUD Update

// --------------------------------------------------- //
// ---------------------  DELETE --------------------- //
// --------------------------------------------------- //
//- REST Delete 
//- CRUD Delete  


module.exports = route;


