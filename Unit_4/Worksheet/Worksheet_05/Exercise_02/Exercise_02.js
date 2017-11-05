//Exercise_03:Para borrar una cookie hay que dejar el parametro expires vacio para que una vez que se cierra la pestaña, la cookie se borre

//Comprueba que la tecla que se ha pulsado es el enter
function compruebaTecla(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        compruebaCookie();
    }
}

//Funciones para iniciar sesión, comprobar la existencia de una sesión y salir de la sesión.//
function creaCookie(usuario) {
    var date = new Date();
    date.setTime(date.getTime() + (5 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = "username=" + usuario + ";" + expires;
    alert("Bienvenido de nuevo " + usuario);
}

//buscaCookie es una función que sirve para cualquier cookie
function buscaCookie(nombreCookie) {
    var usuario = nombreCookie + "=";
    var listaCookies = document.cookie.split(';');
    for (var i = 0; i < listaCookies.length; i++) {
        var c = listaCookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(usuario) == 0) {
            return c.substring(usuario.length, c.length);
        }
    }
    return "";
}

function compruebaCookie() {
    var usuario = buscaCookie("username");
    if (usuario != "") {
        document.getElementById('conecta').style.display = 'none';
        document.getElementById('desconecta').style.display = 'block';
        alert("Bienvenido de nuevo " + usuario);
    } else {
        usuario = document.getElementsByName('userid')[0].value;
        if (usuario != "" && usuario != null) {
            document.getElementById('conecta').style.display = 'none';
            document.getElementById('desconecta').style.display = 'block';
            creaCookie(usuario);
        }
    }
}

function borraCookie() {
    document.getElementById('conecta').style.display = 'block';
    document.getElementById('desconecta').style.display = 'none';
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function aumenta() {
    var x = document.getElementById('contenido').style.fontSize;
    document.getElementById('contenido').style.fontSize = (parseInt(x) + 1) + 'px';
}

function reduce() {
    var x = document.getElementById('contenido').style.fontSize;
    document.getElementById('contenido').style.fontSize = (parseInt(x) - 1) + 'px';
}

function cambiaFondo() {
    document.body.style.backgroundColor = '#ccffff';
    if (document.getElementById('especial').style.backgroundColor == 'white') {
        document.getElementById('especial').style.backgroundColor = '#ccffff';
    }
}

function cambiaBGParrafo() {
    document.getElementById('contenido').style.backgroundColor = '#aaff80';
}

function pordefecto() {
    document.getElementById('contenido').style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
    document.getElementById('contenido').style.fontSize = '16px';
}

window.onload = function() {
    document.getElementById('contenido').style.fontSize = '16px';
    compruebaCookie();
}
document.onload = function() {
    compruebaCookie();
}