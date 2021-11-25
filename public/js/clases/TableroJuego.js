const casilla = require ('./Casilla');

class TableroJuego{
    
    /* --- MÉTODO CONSTRUCTOR --- */ 
    constructor(fila, columna){
        this._fila = fila;
        this._columna = columna;
        this._tableroDeJuego;
    };

    /* --- GETTERS & SETTERS --- */
    get fila(){
        return this._fila;
    }
    set fila(valor){
        this._fila=valor;
    }

    get columna(){
        return this._columna;
    }
    set columna(valor){
        this._columna=valor;
    }

    /* --- METODOS DE CLASE --- */
    //Estamos testeando la opción 1: No se requiere una variable global
    //y el atributo tableroDeJuego cambiará en cada linea.
    imprimeTableroJuego(){      //Privado
        console.log(`Has creado un nuevo tablero de ${this.fila} filas + ${this.columna} columnas`);
    }

    crea_tableroDeJuego(){
        this.defineDimension_tableroDeJuego(this._tableroDeJuego);
        this.instanciarCasillas_tableroDeJuego(this._tableroDeJuego);
    }

    defineDimension_tableroDeJuego(tableroDeJuego){
        //Inicializamos las filas
        tableroDeJuego = new Array(this.fila);
        //Agregamos a cada fila sus columna
        for (var i = 0; i < this.fila; i++){
            tableroDeJuego[i] = new Array(this.columna);
        }
        //Asignamos la matriz a '_tableroDeJuego'
        this._tableroDeJuego = tableroDeJuego;
    }

    instanciarCasillas_tableroDeJuego(tableroDeJuego){       
        for (var i = 0; i < this.fila; i++){
            for (var j = 0; j < this.columna; j++){
                tableroDeJuego[i][j] = new casilla.Casilla();
            }
        }
    }
}

module.exports.TableroJuego = TableroJuego;
