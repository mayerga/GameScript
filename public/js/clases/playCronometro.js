
function autoplay(){
    let cronoJugador = new cronometro()
    cronoJugador.inicializaCronometro();
    
    
    /*
    let cronoJugador = new cronometro();
    let seconds = document.getElementById('seconds');
    let inicio = cronoJugador.inicializaCronometro();
    seconds.innerHTML = inicio;

    let atras = window.setInterval(cronoJugador.cuentaAtrasCronometro(seconds), 1000);
    */
    

    

    //seconds.innerHTML = cronoJugador.inicializaCronometro();


    // cronoJugador.cuentaAtrasCronometro(seconds);
    // cronoJugador.reiniciaCronometro();
}

autoplay();
