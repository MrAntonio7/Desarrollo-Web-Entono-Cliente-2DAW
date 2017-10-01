var c = prompt("Cuantas columnas quieres hacer: ");
var a = prompt("Ancho de las celdas: ");
var h = prompt("Altura de las celdas: ");

function table(x, a, h) {
  document.write("<table border='0' cellspading='2' bgcolor='black'>");
  document.write("<tr height='" + h + "' width='" + x * a + "' >");

  for (let j = x; j > 0; j--) {
    if (j % 2 == 0) {
      document.write("<td bgcolor='red' width='" + a + "'> &nbsp;</td>");
    } else {
      document.write("<td bgcolor='blue' width='" + a + "'> &nbsp;</td>");
    }
  }
  document.write("</tr> </table>");
}

table(c, a, h);
