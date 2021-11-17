/* --- FUNCIONES DRAG & DROP --- */

  //window.addEventListener("load", prohibido, false);
  window.addEventListener("load", salaLlena, false);

  //Inicialización de elementos
  var imagenesFunkos = document.getElementById("img-draggable");
  var salasDestino = document.querySelectorAll(".sala");

  function prohibido(){
    imagenesFunkos.addEventListener("dragend", 
        function(){alert("CUIDADO: no se puede arrastrar aquí.");}, 
        false);
  }    

  function salaLlena(){
      for(var i = 0; i < salasDestino.length; i++ ){
          //Eventos de D&D.
          salasDestino[i].addEventListener("dragover",
              function(e){e.preventDefault();}, false);

          salasDestino[i].addEventListener("dragleave",
              function(e){e.preventDefault();}, false);

          salasDestino[i].addEventListener("drop", 
              abrirSala, false);
      }
  }

  function abrirSala(e){
    alert("¡SALA LLENA! Prueba con cualquier otra sala.");
  }

  /* 
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

