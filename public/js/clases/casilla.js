class Casilla{
    /* ------ CONSTRUCTOR ------ */ 
    /*
    constructor(){
        this._color     = null;        //String
        this._ocupado   = false;     //Boolean
    }
    */
    constructor(coordenadaX, coordenadaY){
        this.celdaHTML  = document.getElementById("c"+coordenadaX+coordenadaY);
        this._color     = null;        //String
        this._ocupado   = false;     //Boolean
    }

    /* --- GETTERS & SETTERS --- */
    set color(valor){
        this._color=valor;
    }
    get color(){
        return this._color;
    }
    set ocupado(valor){
        this._ocupado = valor;
    }
    get ocupado(){
        return this._ocupado;
    }

    /* ---- MÉTODOS DE CLASE ---- */

}

//module.exports.Casilla = Casilla;