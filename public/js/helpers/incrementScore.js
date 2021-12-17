function incrementButtomScore() {

    let number  = document.getElementById('score-incrementable');
    let value   = number.innerHTML;

    ++value;

    document.getElementById('score-incrementable').innerHTML = value;

}

function incrementButtomSalas() {

    let number  = document.getElementById('salas-incrementable');
    let value   = number.innerHTML;

    ++value;

    document.getElementById('salas-incrementable').innerHTML = value;

}