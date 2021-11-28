const segundosInicio = 10;
const seconds = document.getElementById("seconds");

class Cronometro {
  constructor() {
    this._segundos;
    this._segundosInicio = 10;
  }

  get segundos() {
    return this._segundos;
  }

  set segundos(segundos) {
    this._segundos = segundos;
  }

  inicializaCronometro() {
    
    this._segundos = segundosInicio; //Revisar al final
    this.cuentaAtrasCronometro(seconds, segundosInicio);
    //return this._segundos;
  }

  resetTime(inicio){
    clearInterval(inicio); 
  }

  cuentaAtrasCronometro(seconds, valorInicio) {
  
    let contador = valorInicio;
    console.log(this.seconds.innerHTML = contador);
    let inicio = window.setInterval(() => {
      if(contador > 0){
      console.log(seconds.innerHTML = --contador);
    } if( contador ==0){
        this.resetTime(inicio);
        console.log("se acabado el turno")
    this._segundos = segundosInicio;
    this.seconds.innerHTML = this._segundos
      }
    }, 1000);
  }

  // reiniciaCronometro() {
  //   console.log("Se acabo el tiempo! Cambio de Turno");
  //   clearInterval();
  //   this.inicializaCronometro();
  //   //cambiar turno jugador
  // }
}
/*------------------------------------------------------------------*/

//     constructor(/*enum-SOLO PERMITIDO CON TYPESCRIPT*/){
//         this.enum=this.enum;
//     }
//     /*DEFINIMOS GETTERS & SETTERS */
//     set enum(valor){
//         this.enum=valor;
//     }
//     get enum(){
//         return this.enum;
//     }
//     /*DEFINIMOS METODOS */
//     retrocederTiempor(){

//     }
//     reiniciarCronometro(){

//     }

// }

//Cuenta atras V1.
//     console.log(this._segundos);
//     seconds.innerHTML = this._segundos; //POR AQUÍ HAY QUE METER EL SET INTERVAL
//     this._segundos--;

//   if (this._segundos == 0) {
//     alert("Se acabo el tiempo! Cambio de Turno");
//     clearInterval();
//
