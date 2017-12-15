coleccionEnlaces = [];

function creaEnlace(texto, url, nodo) {

    // Crea enlace
    var enlace = document.createElement("a");

    // Atributos y nodo
    enlace.href = url;
    enlace.innerHTML = texto;
    parent = document.getElementsByTagName(nodo)[0];
    parent.appendChild(enlace);
    parent.innerHTML += '<br>';

    // Guarda enlace en coleccion
    coleccionEnlaces.push([texto, url, nodo]);

    // Guarda enlace en localStorage
    localStorage.enlaces = JSON.stringify(coleccionEnlaces);

    //Asocia Evento
    asociaEventos();
}

function cargarStorage() {

    //Cargar localStorage
    if (localStorage.enlaces == undefined) {
        console.log('LocalStorage vacio');
    } else {
        console.log('Datos cargados');
        var storage = JSON.parse(localStorage.enlaces);
        for (var i = 0; i < storage.length; i++) {

            //Creo enlace por cada elemento guardado en localStorage
            creaEnlace(storage[i][0], storage[i][1], "body");
        }
    }
}

function limpiar() {

    //Limpia enlaces
    localStorage.removeItem('enlaces');
}

function asociaEventos() {

    //Asocia eventos a todos los enlaces de la pagina
    for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
        var a = document.getElementsByTagName("a")[i];
        a.setAttribute('onMouseOver', "mouseOver(this)");
        a.setAttribute('onMouseOut', "mouseOut(this)");
    }
}

function mouseOver(a) {
    a.style.background = "red";
}

function mouseOut(a) {
    a.style.background = "white";
}


window.onload = function() {
    cargarStorage();
    asociaEventos();
};