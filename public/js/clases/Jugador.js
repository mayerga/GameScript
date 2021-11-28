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
    getNickName(){
        return this._nickName;
    }

    setColor(valor){
        this._color = valor;
    }

    getColor(){
        return this._color;
    }

    /* --- METODOS DE CLASE --- */
    asignarCasillaInicio(tableroDeJuego){
        //Decide coordenadas de inicio
        let x = Math.round(Math.random()*19);
        let y = Math.round(Math.random()*19);

        //Declaración de variables 
        let casillaJugador  = tableroDeJuego[x][y];
        let colorJugador    = this.getColor();
        let nickNameJugador = this.getNickName();
        
        //Si la casilla; no está ocupada -> cambia casillaVacia a casillaOcupada
        if(!casillaJugador.getOcupado()){
            casillaJugador.casillaOcupada(colorJugador, nickNameJugador);
            console.log(casillaJugador);
        } else {
            this.asignarCasillaInicio(tableroDeJuego);
        }
    }

    //capturaCasilla();
    //PASO 1: SOMBREAR CASILLAS ALHEDAÑAS.
    //PASO 2: PINTAR CASILLA ALHEDAÑA Y CAMBIAR ESTADO.
    //PASO 3: ¿Si está ocupada no se puede ocupar? -> Salta alerta.
    //PASO 4: SUMAR PUNTOS AL SCORE.
    //PASO 5: CAMBIAR TURNO.
    capturaCasilla(){}

    partidasGanas() {}
    PartidasJugadas() {}
}

//module.exports.Jugador = Jugador;