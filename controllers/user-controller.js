const User      = require("../models/user-model");
const Joi       = require('@hapi/joi');
const passport  = require('passport');


//DEFINICIÓN DE REGLAS DE VALIDACIÓN:
const schema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .required(),
    
    password: Joi.string()
        .min(6),

});

//RUTAS PRINCIPALES
const renderLobby = (req, res) => {
    res.render("users/lobby");
};
const renderPlayroom = (req, res) => {
    res.render("users/playroom");
};

// --------------------------------------------------- //
// ---------------------  LOGIN ---------------------- //
// --------------------------------------------------- //
//MEDIANTE FRAMEWORK PASSPORT
const userLogin = passport.authenticate("local", {
    successRedirect: "/lobby",
    //successMessage: "El usuario se ha loggeado correctamente",
    failureRedirect: "/",
});


// --------------------------------------------------- //
// ---------------------  CREATE --------------------- //
// --------------------------------------------------- //

//- REST Post  
const userPost = (req, res)=> {
    
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

};

//- CRUD Create  
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

//- REST GET-ALL
const userGetAll = (req, res) => {

    listarUsuarios()
        .then( valor => res.send({ valor }))
        .catch( err => res.status(400).json({ err }));

};


//- CRUD READ-ALL
listarUsuarios = async() => {

    return User.find()

};


// --------------------------------------------------- //
// ---------------------  UPDATE --------------------- //
// --------------------------------------------------- //

//- REST Put 
const userUpdate = (req, res) => {

    let id      = req.params.id;
    let body    = req.body;

    actualizarUser(id, body)
        .then( valor => res.json({ valor }))
        .catch( err => res.status(400).json({ err }));

};

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
const userDelete = (req, res) => {

    desactivarUsuario(req.params.id)
        .then( valor => res.json({ valor }))
        .catch( err => res.status(400).json({ err }));

};

//- CRUD Delete  
desactivarUsuario = async(id) => {

    return usuario = await User.findOneAndUpdate({ "_id": id }, {
        $set: { estado : false }
    }, { new: true });

}

module.exports = {
    renderLobby,
    renderPlayroom,
    userLogin,
    userPost,
    userGetAll,
    userUpdate,
    userDelete
};

/* CÓDIGO DESCARTADO
//MÉTODO 1 (DESCARTADO)
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

//MÉTODO 2: DESCARTADO
route.get('/user/login', (req, res) => {

    const { username, password } = req.body;

    validacion( username, password )
        .then( valor => {
            res.json({ valor })
            console.log(valor);
        })
        .catch( error => res.status(400).json({ error }))

});

validacion = async ( username, password ) => {

    return await User.find({ "username": username, "password": password });

};
 */