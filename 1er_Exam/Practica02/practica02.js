function Ejercicio3(parametro = false) {
    // Apartado A
    if (parametro) {
        document.getElementsByTagName('title')[0].innerHTML = parametro;
        document.getElementsByTagName('h1')[0].innerHTML = parametro;
    }

    // Apartado B
    var imagenes = document.getElementsByTagName('img');
    for (var i = 0; i < imagenes.length; i++) {
        // Creo parrafos para escribir los enlaces y appendChild Body
        var p = document.createElement('p');
        document.getElementsByTagName('body')[0].appendChild(p);
        // Consigo atributo src de cada img y lo escribo
        p.textContent = (imagenes[i].getAttribute('src'));
        console.log(imagenes[i].getAttribute('src'));
    }
}

// Apartado C

var fecha = new Date();
var minutos = fecha.getMinutes();

function Ejercicio3c() {
    var f = new Date();
    var s = f.getSeconds();
    var min = f.getMinutes();
    // Controlo que si sigue en el mismo minuto siga el contado, si cambia de minuto habiendo cambiado los seg de 3 en 3, pregunte por la url
    if (minutos == min) {
        document.getElementById('reloj').innerHTML = s;
    } else {
        minutos = min;
        var url = prompt('Redireccionar al enlace: ');
        window.location = url;
    }

}

// Window Onload

window.onload = function() {
    Ejercicio3('Titulo cambiado');

    Ejercicio3c();
    // Para 3 segundos
    setInterval(Ejercicio3c, 3000);
};