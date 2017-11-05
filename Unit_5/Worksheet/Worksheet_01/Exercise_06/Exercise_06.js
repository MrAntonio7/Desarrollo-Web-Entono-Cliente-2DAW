imagenes = ["imagenes/imagen1.jpg",
    "imagenes/imagen2.jpg",
    "imagenes/imagen3.jpg"
];

function anterior() {
    var imagen = document.getElementById('imagen').getAttribute('src');
    var pos = imagenes.indexOf(imagen);
    if (pos == 0) {
        document.getElementById('imagen').setAttribute('src', imagenes[imagenes.length - 1]);
    } else {
        document.getElementById('imagen').setAttribute('src', imagenes[pos - 1]);
    }
}

function siguiente() {
    var imagen = document.getElementById('imagen').getAttribute('src');
    var pos = imagenes.indexOf(imagen);
    if (pos == imagenes.length - 1) {
        document.getElementById('imagen').setAttribute('src', imagenes[0]);
    } else {
        document.getElementById('imagen').setAttribute('src', imagenes[pos + 1]);
    }
}