var c = prompt("Cuantas columnas quieres hacer: ");
var a = prompt("Ancho de las celdas: ");
var h = prompt("Altura de las celdas: ");

function table(j, a, h) {
  document.write("<table border='0' cellspading='2' bgcolor='black'>");
  document.write("<tr height='" + h + "' width='" + j * a + "' >");

  while (j > 0) {
    if (j % 2 == 0) {
      document.write("<td bgcolor='red' width='" + a + "'> &nbsp;</td>");
    } else {
      document.write("<td bgcolor='blue' width='" + a + "'> &nbsp;</td>");
    }
    j--;
  }
  document.write("</tr> </table>");
}

table(c, a, h);
