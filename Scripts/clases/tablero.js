
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