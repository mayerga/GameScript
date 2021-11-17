/* --- FUNCIONES DRAG & DROP --- */

  window.addEventListener("load", prohibido, false);
  window.addEventListener("load", salaLlena, false);

  //Inicialización de elementos
  var img_draggable = document.getElementById("img-draggable");
  var sala_destino = document.getElementById("sala-destino");

  function prohibido(){
    img_draggable.addEventListener("dragend", 
        function(){alert("CUIDADO: no se puede arrastrar aquí.");}, 
        false);
  }    


  function salaLlena(){
    //Eventos de D&D.
    sala_destino.addEventListener("dragover",
        function(e){e.preventDefault();}, false);

    sala_destino.addEventListener("dragleave",
        function(e){e.preventDefault();}, false);

    sala_destino.addEventListener("drop", 
        soltado, false);
  }

  function soltado(e){
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

