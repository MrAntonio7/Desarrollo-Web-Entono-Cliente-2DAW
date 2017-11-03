var a = document.getElementsByTagName('a');
var p = document.getElementsByTagName('p');


function escribir(fun) {
    var body = document.body;
    var new_p = document.createElement('p');
    var text = fun;
    new_p.innerHTML += text;
    body.appendChild(new_p);
}

function apartado_a() {

    return ('Apartado A: Hay ' + a.length + ' enlaces a tu página');
}

function apartado_b() {
    return ('Apartado B: El penultimo enlace tiene ' + a[a.length - 2].href);
}

function apartado_c() {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i].href == "https://www.google.es/") {
            c++;
        }
    }
    return ('Apartado C: Hay ' + c + ' enlaces de Google');
}

function apartado_d() {
    var d = p[2].getElementsByTagName('a');
    return ('Apartado D: En el tercer parrafo hay ' + d.length + ' enlaces')
}

window.onload = function() {
    escribir(apartado_a());
    escribir(apartado_b());
    escribir(apartado_c());
    escribir(apartado_d());
};