var segundos = 5;
var temporizador = () => {
    if(segundos >= 0) {
        setTimeout(temporizador, 1000);
        segundos--;
    }
        document.write(segundos + '<br>');
}

temporizador();
