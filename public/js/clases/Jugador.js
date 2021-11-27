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
        //Imprime coordenadas de inicio
        console.log(x);
        console.log(y);

        //Cambia casillaVacia a casillaOcupada
        let casillaJugador  = tableroDeJuego[x][y];
        let colorJugador    = this.getColor();
        let nickNameJugador = this.getNickName();

        console.log(casillaJugador);
        casillaJugador.casillaOcupada(colorJugador, nickNameJugador);
        console.log(casillaJugador);
    }


    partidasGanas() {}
    PartidasJugadas() {}
}

//module.exports.Jugador = Jugador;