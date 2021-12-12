//peticion get con ajax
$.ajax({

    url: 'http://localhost:3000/users',
    type: 'GET',
    crossDomain: false,
    dataType: 'json',
    success: function(resp) { console.log(resp); },
    
}).fail( function( jqXHR, textStatus, errorThrown ) {
alert( 'Error!!' );
console.log(textStatus);
});

//peticion get con ajax jquery
$.get("http://localhost:3000/users", function(data, status){
console.log("Data: " + data[1].nombre + "\nStatus: " + status);
}).fail( function( jqXHR, textStatus, errorThrown ) {

console.log(errorThrown);
});

//peticion post con ajax jquery
function crearJugador(nombreJugador){
$.post("http://localhost:3000/users/create",
{
nombre: nombreJugador,
},
function(data, status){
console.log("Data: " + data + "\nStatus: " + status);
}).fail( function( jqXHR, textStatus, errorThrown ) {

console.log(errorThrown);
});
}

$("#botonEnviar").click(function(){
let nombre = $("#nombre").val();
crearJugador(nombre);
})

//peticion put con ajax
let datas={"nombre":"pato donald"};
$.ajax({
url: 'http://localhost:3000/users/update',
type: 'PUT',
contentType:'application/json',
data: JSON.stringify(datas),
success: function(data) {
console.log('Load was performed.');
}
});

//peticion delete
$.ajax({
url: 'http://localhost:3000/users/delete',
type: 'DELETE',
success: function(data) {
console.log('BORRO');
}
});