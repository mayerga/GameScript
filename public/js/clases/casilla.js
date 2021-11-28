class Casilla{
    /* ------ CONSTRUCTOR ------ */ 
    constructor(coordenadaX, coordenadaY){
        this._celdaHTML = document.getElementById("c"+coordenadaX+coordenadaY);
        this._dueño     = null;      //String
        this._ocupado   = false;     //Boolean
    }

    /* --- GETTERS & SETTERS --- */
    get getCeldaHTML(){
        return this._celdaHTML;
    }
    getOcupado(){
        return this._ocupado;
    }

    setOcupado(boolano){
        this._ocupado = boolano;
    }

    setDueño(nuevoDueño){
        this._dueño = nuevoDueño;
    }

    /* ---- MÉTODOS DE CLASE ---- */
    casillaOcupada(color, dueño){
        console.log(`El Jugador "${dueño}" de color "${color}" se ha unido a la partida.`);
        this.getCeldaHTML.style.background = color;
        this.setDueño(dueño);
        this.setOcupado(true);
    }
}

//module.exports.Casilla = Casilla;