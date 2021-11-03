/*function Users(name, age, action){
    this.action=action;
    this.name=name;
    this.age=age;
}

users.prototype.AddUser=function(){
    console.log(this.name+""+this.age);
    $.ajax({
        type:"POST",
        url: this.action,
        data:{name:this.name, age:this.age},
        success:function(response){
            alert(response==1) {
                alert("Datos insertados");
            }
        }
    });

}*/

class Jugador {
  constructor(idJjugador, nickName) {
    this.idJugador = idJjugador;
    this.nickName = nickName;
    this.avatar = avatar;
    this.color = color;
    this.score = score;
  }
    partidasGanas() {}
    PartidasJugadas() {}
}

class Partida{
constructor(idTablero,tablero,Jugador,cronometro,contador,chat,botonesVarios){
    this.idTablero = tablero;
    this.tablero = tablero;
    this.Array[Jugador] = Array[Jugador];
    this.cronometro = cronometro;
    this.Array[contador] = Array[contador];
    this.chat = chat;
    this.botonesVarios = botonesVarios;
}
    mostrarGanador(){}
    mostrarJugadores(){}
    almacenarScore(){}
}