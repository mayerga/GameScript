//const claseTableroDeJuego = require ('./TableroJuego');
window.addEventListener("load", play, false);

let tableroDeJuego;
let jugadores = new Array();
//FUNCIÓN PRINCIPAL
function play(){

    //Si play => Se inicia una nueva partida.
    let partida = new Partida();
    tableroDeJuego = partida.getTableroDeJuego();

    //si (nºJugadores > 1) entonces 
    //Instanciar jugadores dentro de partidas:
    let jugador1 = new Jugador('01', 'Julito');
    jugador1.setColor("blue");
    jugadores.push(jugador1)

    let jugador2 = new Jugador('02', 'Kevin');
    jugador2.setColor("red");
    jugadores.push(jugador2)

    let jugador3 = new Jugador('03', 'Sergio');
    jugador3.setColor("green");
    jugadores.push(jugador3)

    let jugador4 = new Jugador('04', 'Manu');
    jugador4.setColor("orange");
    jugadores.push(jugador4)

        /*NOTA: {Los setColor se encuentran aislados del método constructor, 
                porqué se tiene la intención que en un futuro, el jugador,
                pueda escoger su propio color} */

    //Se pasa los jugadores al metodo asignarCasillaInicio
    partida.asignarJugadoresCasillaInicio(jugadores);
    partida.nuevaRonda();
    //LÓGICA DE CAPTURA + SOCKET.IO
    //PASO 1: ASIGNAR TURNO
    //nuevaRonda();
}