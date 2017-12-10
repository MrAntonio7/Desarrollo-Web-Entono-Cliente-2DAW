function aplicaEstilos(tabla) {
    if (document.getElementById(tabla)) {
        var t = document.getElementById(tabla);
        var cabecera = t.getElementsByTagName('tr')[0];
        var titulos = cabecera.getElementsByTagName('td');
        var columnas = t.getElementsByTagName('tr');
        for (var i = 0; i < titulos.length; i++) {
            titulos[i].style.color = "red";
        }
        for (var j = 1; j < columnas.length; j++) {
            var filas = columnas[j];
            if (j % 2 == 0) {
                filas.style.backgroundColor = 'blue';
            } else {
                filas.style.backgroundColor = 'green';
            }

        }
    } else {
        console.log('Esa id no existe');
    }
}
window.onload = function() {
    aplicaEstilos('tabla');
};