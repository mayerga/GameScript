
class Tablero{

    /*DEFINIMOS CONSTRUCTOR*/ 
    constructor(fila, columna, celda){
        this.fila = fila;
        this.columna = columna;
        this.celda = celda;        
    };
    /*DEFINIMOS GETTERS & SETTERS */
    set fila (valor){
        this.fila=valor;
    }
    get fila (){
        return this.fila;
    }
    set columna(valor){
        this.columna=valor;
    }
    get columna(){
        return this.columna;
    }
    set celda(valor){
        this.celda=valor;
    }
    get celda(){
        return this.celda;
    }
    /*DEFINIMOS METODOS */
    getImprimirTablero(){

    }     
}

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

class cronometro{
    constructor(/*enum-SOLO PERMITIDO CON TYPESCRIPT*/){
        this.enum=this.enum;
    }
    /*DEFINIMOS GETTERS & SETTERS */
    set enum(valor){
        this.enum=valor;
    }
    get enum(){
        return this.enum;
    }
    /*DEFINIMOS METODOS */
    retrocederTiempor(){

    }
    reiniciarCronometro(){
        
    }

}
        




