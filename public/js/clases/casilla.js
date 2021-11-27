class Casilla{
    /* ------ CONSTRUCTOR ------ */ 
    /*
    constructor(){
        this._color     = null;        //String
        this._ocupado   = false;     //Boolean
    }
    */
    constructor(coordenadaX, coordenadaY){
        this._celdaHTML  = document.getElementById("c"+coordenadaX+coordenadaY);
        this._color     = null;        //String
        this._ocupado   = false;     //Boolean
    }

    /* --- GETTERS & SETTERS --- */
    get getCeldaHTML(){
        return this._celdaHTML;
    }

    setColor(valor){
        this._color = valor;
    }
    get getColor(){
        return this._color;
    }
    setOcupado(valor){
        this._ocupado = valor;
    }
    get getOcupado(){
        return this._ocupado;
    }

    /* ---- MÉTODOS DE CLASE ---- */
    casillaOcupada(){
        this.getCeldaHTML.style.background="red";
        this.setOcupado(true);
    }
}

//module.exports.Casilla = Casilla;