var socket = io.connect("http://localhost:3000/", {
  forceNew: true,
});

/* creador de salas*/

let incrementa = document.getElementById("salas-incrementable");
let btn2 = document.getElementById("send-score");

btn2.addEventListener("click", function () {
  socket.emit("score:incrementacion", {
    incrementa: incrementa.innerHTML,
  });
 
});
socket.on("score:incrementacion", function (data) {
  console.log(data.incrementa);
  incrementa.innerHTML = (data.incrementa);
});


