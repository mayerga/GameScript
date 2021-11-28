class Partida{
        
    /* --- MÉTODO CONSTRUCTOR --- */ 
    constructor(){
        //this.idTablero = tablero;                 //Necesario para MONGO
        this._tableroDeJuego = this.nuevoTableroDeJuego();
        this._jugadores      = null;       
        this._cronometro     = null;               
        this._tableroScore   = null     
        this._chat           = null;
        this._ronda          = 0;
        this._ganador        = false;               //Necesario para MONGO                           
        //this.botonesVarios = botonesVarios;         
    }

    /* --- GETTERS & SETTERS --- */
    getTableroDeJuego(){
        return this._tableroDeJuego;
    }
    setJugadores(jugadores){
        this._jugadores = jugadores;
    }

    /* --- METODOS DE CLASE --- */
    autoAsignarID(){}
    nuevoTableroDeJuego(){
        //Se crea un nuevo tablero de juego de 20casillas x 20casillas.
        tableroDeJuego = new TableroJuego(20, 20); 
        tableroDeJuego.crea_tableroDeJuego();
        tableroDeJuego = tableroDeJuego.getTableroDeJuego;
        return tableroDeJuego;
    }

    asignarJugadoresCasillaInicio(jugadores){
        let i = 0;
        while(i < jugadores.length){
            jugadores[i].asignarCasillaInicio(this._tableroDeJuego);
            i++;
        }
        this.setJugadores(jugadores);
    }
    
    //nuevaRonda();
        //Si (!hayGanador) entonces
            //jugadores = [jugador1, jugador2, jugador3, jugador3]
            //let jugadorActual;
            //let i = 0;  
            //mientras (i < 4){
                //jugadorActual[0];
                //jugadorActual  
                    //-> capturaCasilla() {Evento.onclick} -> i++;
            //finMientras
            //reiniciarRonda();
        //finEntonces.
    //
    nuevaRonda(){
        let jugadorActual;
        if (!this._ganador){
            let i = 0;
            while(i < this._jugadores.length){
                jugadorActual = this._jugadores[i];
                //jugadorActual.capturaCasilla();
                i++;
            }
        }
    }

    mostrarGanador(){}
    mostrarJugadores(){}
    almacenarScore(){}
    }