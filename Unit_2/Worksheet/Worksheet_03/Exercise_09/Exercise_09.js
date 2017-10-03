function formateo(cad) {
  var x = cad.toLowerCase().split(' ').join('')
  return x
}

function invierteCadena (cad) {
  var x = cad.length
  var y = ''
  while (x >= 0) {
    y += cad.charAt(x)
    x--
  }
  return y
}

function tabla(cad) {
  var cadi = invierteCadena(cad)
  document.write('<table>')
  document.write('<tr>')
  for (let i = 0; i < cad.length; i++) {
    document.write('<td>' + cad[i] + '</td>')
  }
  document.write('</tr>')
  for (let j = 1; j < cad.length - 1; j++) {
    document.write("<tr>");
    document.write("<td>" + cad[j] + "</td>");

    for (let k = 0; k < cad.length - 2; k++) {
      document.write("<td></td>");
    }

    document.write("<td>" + cadi[j] + "</td>");
    document.write("</tr>");
  }
  for (let i = 0; i < cadi.length; i++) {
    document.write('<td>' + cadi[i] + '</td>')
  }
  document.write('</tr>')
}
tabla(formateo('Caramelo'))
