//Devuelvo un numero del 1 a n

function random(n) {
  var num = Math.random() * (n - 1);
  return Math.round(num + 1)
}

//
var dado_01 = random(6);
var dado_02 = random(6);
var suma = dado_01 + dado_02;
//document.write("La suma de los dados " + dado_01 + " y " + dado_02 + " es " + suma + "<br><br>");
//

//Devuelvo una lista con muchas tiradas
function tiradas(n) {
  var lista = [];
  for (var i = 0; i < n; i++) {
    lista.push([random(6), random(6)]);
  }
  return lista;
}

var lista_tirada = tiradas(3000);
//document.write(lista_tirada[0] + "<br>")
//

//Creo una lista nueva donde va a tener minilistas de las 4 operaciones
var operaciones = []
for (let i = 0; i < lista_tirada.length; i++) {
  var sum = lista_tirada[i][0] + lista_tirada[i][1];
  var res = lista_tirada[i][0] - lista_tirada[i][1];
  var mul = lista_tirada[i][0] * lista_tirada[i][1];
  var div = parseFloat(lista_tirada[i][0] / lista_tirada[i][1]).toFixed(2);
  operaciones.push([sum, res, mul, div])
}

//document.write(operaciones[0] + "<br>")

//
//MAQUETACION DE LA TABLA
//
function crear_tabla() {
  document.write("<table border=1>");
  document.write("<tr><td>Numero 1</td><td>Numero 2</td><td>Suma</td><td>Resta</td><td>Multiplicacion</td><td>Division</td></tr>");
  for (let i = 0; i < lista_tirada.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < lista_tirada[i].length; j++) {
      document.write("<td>" + lista_tirada[i][j] + "</td>");
    }
    for (let k = 0; k < operaciones[i].length; k++) {
      document.write("<td>" + operaciones[i][k] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");

}
crear_tabla();
