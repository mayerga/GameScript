const Note  = require("../models/note-model");

const agregarNota = ( req, res ) => {
    const { title, description } = req.body;
    const errors = [];

    if ( !title ) {
        errors.push({text: 'Por favor, agregue un título'});
    } 
    if ( !description ) {
        errors.push({text: 'Por favor, agregue una descripción'});
    }
    if ( errors.length > 0 ){
        res.render('users/lobby', { errors, title, description });
    } else {
        res.send("Ok");
    };

};

const mostrarNotas = (req, res) => {
    res.render("users/all-notes");
};


module.exports = {
    agregarNota,
    mostrarNotas,
};

