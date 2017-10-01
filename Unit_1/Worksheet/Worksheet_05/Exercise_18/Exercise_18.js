var c = prompt("Cuantas columnas quieres hacer: ");
var f = prompt("Cuantas columnas quieres hacer: ");
var a = prompt("Ancho de las celdas: ");
var h = prompt("Altura de las celdas: ");

function table(x, y, a, h){
  document.write("<table border='0' cellspading='2' bgcolor='black'>");
  for (let i = y; i > 0; i--){
    document.write("<tr bgcolor='white' height='" + h +"' width='" + x*a + "' >");

    for (let j = x; j > 0; j--){
      document.write("<td width='" + a + "'> &nbsp;</td>");
    }
  }
  document.write("</tr> </table>");
}

table(c,f,a,h);
/*
//Segundo metodo
function table(){
  var columnas = prompt("Cuantas columnas quieres hacer: ");
  var filas = prompt("Cuantas columnas quieres hacer: ");
  var ancho = prompt("Ancho de las celdas: ");
  var alto = prompt("Altura de las celdas: ");

  document.write("<table border='0' cellspading='2' bgcolor='black'>");
  for (let i = 0; i < filas; i++){
    document.write("<tr bgcolor='white' height='" + alto +"' width='" + columnas * ancho + "' >");

    for (let j = 0; j < columnas; j++){
      document.write("<td width='" + ancho + "'> &nbsp;</td>");
    }
  }
  document.write("</tr> </table>");
}

table();
*/
