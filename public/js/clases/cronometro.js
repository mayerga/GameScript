class cronometro {
  constructor() {
    this._segundos;
  }

  get segundos() {
    return this._segundos;
  }

  set segundos(segundos) {
    this._segundos = segundos;
  }

  inicializaCronometro() {
    let secInicio = 10;
    this._segundos = secInicio; //Revisar al final
    let seconds = document.getElementById("seconds");
    this.cuentaAtrasCronometro(seconds);


  
    //return this._segundos;
  }

  cuentaAtrasCronometro(seconds) {
    window.setInterval(() => {  
      seconds.innerHTML = this._segundos;
      console.log (this._segundos);     
      this._segundos = --this._segundos;    
      
    if (this._segundos == -2) 
      this.reiniciaCronometro();
    },1000); 
  }

  reiniciaCronometro() {
    console.log("Se acabo el tiempo! Cambio de Turno");
    clearInterval();
    this.inicializaCronometro();
    //cambiar turno jugador
  }
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
