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
    imprimeTableroJuego(){  
        console.log(`Has creado un nuevo tablero de ${this.fila} filas + ${this.columna} columnas`);
    }

    /**
     * Inicializa el tablero con todas sus casillas nulas y vacias.
     */
    crea_tableroDeJuego(){
        this.defineDimension_tableroDeJuego(this._tableroDeJuego);
        this.instanciarCasillas_tableroDeJuego(this._tableroDeJuego);
    }

    /**
     * Define el tamaño del tablero, haciendolo una Matriz bidimensional de filas y columnas.
     * La intención de esté módulo, es que más adelante se pueda escoger el tamaño del tablero.
     * @param {*} tableroDeJuego 
     */
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

    /**
     * Asigna una casilla vacia (de la clase 'Casilla.js') a cada 
     * una de las posiciones de la Matriz del tablero.
     * @param {*} tableroDeJuego 
     */
    instanciarCasillas_tableroDeJuego(tableroDeJuego){       
        for (var i = 0; i < this.fila; i++){
            for (var j = 0; j < this.columna; j++){
                tableroDeJuego[i][j] = new casilla.Casilla();
            }
        }
    }
}

module.exports.TableroJuego = TableroJuego;
