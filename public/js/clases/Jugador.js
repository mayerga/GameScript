class Jugador {
    constructor(idJugador, nickName) {
        this._idJugador = idJugador;
        this._nickName = nickName;
        this._avatar = null;
        this._color = null;
        this._score = null;
    }


    partidasGanas() {}
    PartidasJugadas() {}
}

module.exports.Jugador = Jugador;