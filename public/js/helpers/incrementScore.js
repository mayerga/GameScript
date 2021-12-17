function incrementButtom() {

    let number  = document.getElementById('score-incrementable');
    let value   = number.innerHTML;

    ++value;

    document.getElementById('score-incrementable').innerHTML = value;

}