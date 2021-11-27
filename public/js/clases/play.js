//const claseTableroDeJuego = require ('./TableroJuego');
//window.addEventListener("load", play, false);

let tableroDeJuego;

function SelectCell(x, y){
    console.log(x);
    console.log(y);
    let casillaPlayer1 = tableroDeJuego.getTableroDeJuego[x][y];
    console.log(casillaPlayer1);
    casillaPlayer1.casillaOcupada();
    console.log(casillaPlayer1);

    //PASO 1: Cambiar el código POO.
    //1.2: Casilla tiene que tener color o dueño.
    //Que el dueño le asigne el color.
    //PASO 2: Instanciar un jugador.
    //PASO 3: Agregar 4 players.
    //PASO 4: 
}

//FUNCIÓN PRINCIPAL
function play(){

    //Se crea un nuevo tablero de juego de 20casillas x 20casillas.
    tableroDeJuego = new TableroJuego(20, 20); 
    tableroDeJuego.crea_tableroDeJuego();
    tableroDeJuego = tableroDeJuego.getTableroDeJuego;

    //Si play => Comenzar juego
    let jugador1 = new Jugador('01', 'Julito');
    console.log(jugador1);
    //Esto está aislado del método constructor, porqué
    //se tiene la intención que en un futuro, el jugador,
    //pueda escoger su propio color;
    jugador1.setColor("green");
    jugador1.asignarCasillaInicio(tableroDeJuego);
    //x = Math.round(Math.random()*19);
    //y = Math.round(Math.random()*19);


    let jugador2 = new Jugador('02', 'Kevin');
    jugador2.setColor("purple");
    //SelectCell(x,y);
}