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
    this._segundos = secInicio;

    return this._segundos;
  }

  cuentaAtrasCronometro(param) {
    
    while(this._segundos >=0){
    param.innerHTML = this._segundos;
    this._segundos--;
    //console.log(this._segundos + "hola");
    }   
  }

  reiniciaCronometro(){

    if (this._segundos == 0){

        alert("Se acabo el tiempo! Cambio de Turno" );
    }

    this.inicializaCronometro();
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
