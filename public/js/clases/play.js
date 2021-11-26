//const claseTableroDeJuego = require ('./TableroJuego');
window.addEventListener("load", play, false);

//FUNCIÓN PRINCIPAL
function play(){
    let tableroDeJuego = new TableroJuego(20, 20);
    tableroDeJuego.crea_tableroDeJuego();
    console.log(tableroDeJuego);    
}