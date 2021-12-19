const Note  = require("../models/note-model");

const agregarNota = async( req, res ) => {
    const { title, description } = req.body;
    const errors = [];

    if ( !title ) {
        errors.push({text: 'Por favor, agregue un título'});
    } 
    if ( !description ) {
        errors.push({text: 'Por favor, agregue una descripción'});
    }
    if ( errors.length > 0 ){
        res.render('users/lobby', { errors });
    } else {
        const newNote = new Note({ title, description });
        await newNote.save();
        console.log("Se ha creado una nueva nota:");
        console.log(newNote);
        res.redirect('/notes/mostrarNotas');
    };

};

const mostrarNotas = async(req, res) => {
    
    const notes = await Note.find();
    res.render("users/all-notes", { notes });

};


module.exports = {
    agregarNota,
    mostrarNotas,
};

