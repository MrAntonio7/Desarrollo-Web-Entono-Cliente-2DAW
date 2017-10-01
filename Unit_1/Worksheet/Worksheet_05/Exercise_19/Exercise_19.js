var c = prompt("Cuantas columnas quieres hacer: ");
var f = prompt("Cuantas fila quieres hacer: ");
var a = prompt("Ancho de las celdas: ");
var h = prompt("Altura de las celdas: ");

function table(c, f, a, h) {
  let fila = f
  let contador = c
  document.write("<table border='0' cellspading='2' bgcolor='black'>");
  while (fila > 0) {
    document.write("<tr height='" + h + "' width='" + c * a + "' >");
    while (contador > 0) {
      if (fila % 2 == 0) {
        document.write("<td bgcolor='black' width='" + a + "'> &nbsp;</td>");
        document.write("<td bgcolor='white' width='" + a + "'> &nbsp;</td>");
        contador --;
      } else {
        document.write("<td bgcolor='white' width='" + a + "'> &nbsp;</td>");
        document.write("<td bgcolor='black' width='" + a + "'> &nbsp;</td>");
        contador--;
      }
    }
    fila--;
    contador = c
    document.write("</tr>");
  }
  document.write("</table>");
}
table(c, f, a, h);
