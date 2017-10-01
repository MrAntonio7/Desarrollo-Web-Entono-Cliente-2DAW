var a = prompt('Dame un angulo en grados: ')
function seno (x) {
  const p = Math.PI
  x++
  document.write('<table border=1><tr><td>Grados</td><td>Seno</td>')
  for (let c = 0; c < x; c++) {
    var r = (c * p) / 180
    document.write('<tr><td>' + c + '</td><td>' + Math.sin(r) + '</td></tr>')
  }
  document.write('</table>')
}
seno(a)
