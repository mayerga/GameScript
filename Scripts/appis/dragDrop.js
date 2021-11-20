/* --- FUNCIONES DRAG & DROP --- */

  window.addEventListener("load", tratarEntrarSala, false);

  //Inicialización de elementos
  var imagenesFunkos = document.querySelectorAll(".imgFunko");
  var salasDestino = document.querySelectorAll(".contendorRecibeFunko");

  //Función central
  function tratarEntrarSala(){
      for(var i = 0; i < salasDestino.length; i++ ){
          //Eventos de D&D.
          salasDestino[i].addEventListener("dragover",
              function(e){e.preventDefault();}, false);

          salasDestino[i].addEventListener("dragleave",
              function(e){e.preventDefault();}, false);

          salasDestino[i].addEventListener("drop", 
              puedesEntrar, false);
      }
  }

  //Funciones específicas
  function puedesEntrar(e){
    window.open("http://localhost:3000/3_playroom.html");
  }

  /* 
  function SalaLlena(){
    imagenesFunkos.addEventListener("dragend", 
        function(){alert("¡SALA LLENA! Prueba con cualquier otra sala.");}, 
        false);
  }    


  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }*/

