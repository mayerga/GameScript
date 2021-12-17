const express   = require('express');
const User      = require("../models/user-model");
const Joi       = require('@hapi/joi');
const route     = express.Router();

/*TODO: 
    - Corregir el redireccionamiento.
*/

//DEFINICIÓN DEL VALIDADOR DE PARÁMETROS:
const schema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .required(),
    
    password: Joi.string()
        .min(6),

    //disponibilidad
});

// --------------------------------------------------- //
// ---------------------  CREATE --------------------- //
// --------------------------------------------------- //

//- REST Post  
route.post('/user/register', (req, res)=> {
    
    const body = req.body;
    
    //VALIDACIÓN
    schema.validate({ 
        nombre      : body.nombre,
        password    : body.password
    });

    //EJECUCIÓN DEL MÉTODO
    
    crearUsuario(body)
        .then ( valor => {
            res.send({ valor }),
            console.log(`El USUARIO ${valor.username} SE HA CREADO CORRECTAMENTE`)
        })
        .catch ( err => res.status(400).json({ err }));

});

//- CRUD Create  
crearUsuario = async(body) => {

    let user = new User({
        username    : body.username,
        password    : body.password
    });
    
    return await user.save();

};

// --------------------------------------------------- //
// ---------------------  LOGIN ---------------------- //
// --------------------------------------------------- //
route.post('/user/login', ( req, res )=>{

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
// ----------------------  READ ---------------------- //
// --------------------------------------------------- //

//- REST GET-ALL
route.get('/user/all', (req, res) => {

    listarUsuarios()
        .then( valor => res.send({ valor }))
        .catch( err => res.status(400).json({ err }));

});


//- CRUD READ-ALL
listarUsuarios = async() => {

    return User.find()

};

//- REST GET-ONE
route.get('/user/login', (req, res) => {

    const { username, password } = req.body;

    userLogin( username, password )
        .then( valor => {
            res.json({ valor })
            console.log(valor);
        })
        .catch( error => res.status(400).json({ error }))

});
//- CRUD READ-ONE
userLogin = async ( username, password ) => {

    return await User.find({ "username": username, "password": password });

};


// --------------------------------------------------- //
// ---------------------  UPDATE --------------------- //
// --------------------------------------------------- //

//- REST Put 
route.put('/user/:id', (req, res) => {

    let id      = req.params.id;
    let body    = req.body;

    actualizarUser(id, body)
        .then( valor => res.json({ valor }))
        .catch( err => res.status(400).json({ err }));

});

//- CRUD Update  
actualizarUser = async(id, body) => {

    return user = await User.findOneAndUpdate({ "_id" : id}, {
        $set: {
            username: body.username,
            password: body.password
        }
    }, { new: true });
     
};


// --------------------------------------------------- //
// ---------------------  DELETE --------------------- //
// --------------------------------------------------- //

//- REST Delete 
//RECUERDA: En las bases de datos reales, no es usual eliminar un dato.
//          Por ello, lo que se suele hacer, es desactivar dichos usuarios.
route.delete('/user/:id', (req, res) => {

    desactivarUsuario(req.params.id)
        .then( valor => res.json({ valor }))
        .catch( err => res.status(400).json({ err }));

});

//- CRUD Delete  
desactivarUsuario = async(id) => {

    return usuario = await User.findOneAndUpdate({ "_id": id }, {
        $set: { estado : false }
    }, { new: true });

}

module.exports = route;
