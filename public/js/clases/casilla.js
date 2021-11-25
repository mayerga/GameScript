
/*LA SIGUIENTE CLASE DEBERÍA SER ABSTRACTA PERO SOLO SE PUEDE CON TYPESCRIPT NO PERMITIDO EN ESTE PRODUCTO */
class Casilla{
    /* ------ CONSTRUCTOR ------ */ 
    constructor(){
        this._color = null;        //String
        this._ocupado = false;     //Boolean
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

    /* -------- METODOS -------- */
    /**
     * Devuelve una casilla vacia
     */
    getnuevaCasilla(){
        return new Casilla(null, false);  
    }
}

module.exports.Casilla = Casilla;