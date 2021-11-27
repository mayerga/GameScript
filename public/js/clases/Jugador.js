class Jugador {
        
    /* --- MÉTODO CONSTRUCTOR --- */ 
    constructor(idJugador, nickName) {
        this._idJugador = idJugador;
        this._nickName = nickName;
        this._avatar = null;
        this._color = null;
        this._score = null;
    }

    /* --- GETTERS & SETTERS --- */
    setColor(valor){
        this._color = valor;
    }

    /* --- METODOS DE CLASE --- */
    asignarCasillaInicio(tableroDeJuego){
        console.log(tableroDeJuego);
        let x = Math.round(Math.random()*19);
        let y = Math.round(Math.random()*19);
        //Imprime coordenadas
        console.log(x);
        console.log(y);

        //Cambia casillaVacia a casillaOcupada
        let casillaPlayer1 = tableroDeJuego[x][y];
        console.log(casillaPlayer1);
        casillaPlayer1.casillaOcupada();
        console.log(casillaPlayer1);
    }


    partidasGanas() {}
    PartidasJugadas() {}
}

//module.exports.Jugador = Jugador;