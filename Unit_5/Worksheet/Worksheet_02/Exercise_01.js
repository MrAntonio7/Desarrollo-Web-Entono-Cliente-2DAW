var pelota1 = document.getElementById('pelota1');
var pelota2 = document.getElementById('pelota2');
var svg = document.getElementsByTagName('svg')[0];
var alto = parseInt(svg.getAttribute('height'));
var ancho = parseInt(svg.getAttribute('width'));
var x = parseInt(pelota1.getAttribute('cx') - 40);
var y = parseInt(pelota1.getAttribute('cy') - 40);
var x2 = parseInt(pelota2.getAttribute('cx') - 40);
var y2 = parseInt(pelota2.getAttribute('cy') - 40);
var movx = 1;
var radiox = 40;
var movy = 1;
var radioy = 40;
var movx2 = 1;
var radiox2 = 40;
var movy2 = 1;
var radioy2 = 40;
var contador = 0;

function comprueba() {
    var x = parseInt(pelota1.getAttribute('cx')) + radiox;
    var y = parseInt(pelota1.getAttribute('cy')) + radioy;
    var x2 = parseInt(pelota2.getAttribute('cx')) + radiox2;
    var y2 = parseInt(pelota2.getAttribute('cy')) + radioy2;
    console.log('Pelota 1: ' + x + 'x ' + y + 'y ');
    console.log('Pelota 2: ' + x2 + 'x ' + y2 + 'y ');

    if (x > ancho || x < 0) {
        movx *= -1;
        radiox *= -1;
    } else if (y > alto || y < 0) {
        movy *= -1;
        radioy *= -1;
    }

    if (x2 > ancho || x2 < 0) {
        movx2 *= -1;
        radiox2 *= -1;
    } else if (y2 > alto || y2 < 0) {
        movy2 *= -1;
        radioy2 *= -1;
    }

    if (x == x2 && y == y2) {
        contador++;
        document.getElementById('contador').innerHTML = contador;
        document.getElementsByTagName('title')[0].innerHTML = 'Choques: ' + contador;
    }

}

function pos() {
    comprueba();
    pelota1.setAttribute('cx', parseInt(pelota1.getAttribute('cx')) + movx);
    pelota1.setAttribute('cy', parseInt(pelota1.getAttribute('cy')) + movy);
    pelota2.setAttribute('cx', parseInt(pelota2.getAttribute('cx')) + movx2);
    pelota2.setAttribute('cy', parseInt(pelota2.getAttribute('cy')) + movy2);
}

function mover() {
    setInterval(pos, 1);
}

window.onload = function() {
    mover();
}