
/*LA SIGUIENTE CLASE DEBERÍA SER ABSTRACTA PERO SOLO SE PUEDE CON TYPESCRIPT NO PERMITIDO EN ESTE PRODUCTO */
class casilla{
    /*DEFINIMOS CONSTRUCTOR*/ 
    constructor(color){
        this.color=color;
    }

    /*DEFINIMOS GETTERS & SETTERS */
    set color(valor){
        this.color=valor;
    }
    get color(){
        return this.color;
    }
    
    /*DEFINIMOS METODOS */
        /*GETCASILLAOCUPADA TIPO BOOLEAN */
    getCasillaOcupada(){
         
    }
    setCapturadoJugador(){

    }
}