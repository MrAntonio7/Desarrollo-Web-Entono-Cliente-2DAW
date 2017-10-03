function invierteCadena (cad) {
  var x = cad.length
  var y = ''
  while (x >= 0) {
    y += cad.charAt(x)
    x--
  }
  return y
}

function formateo (cad) {
  var x = cad.toLowerCase().split(' ').join('')
  return x
}

var c = 'Sometamos o matemos'
var y = formateo(invierteCadena(c))
var x = formateo(c)

document.write(x + '<br>')
document.write(y + '<br>')

if (x == y) {
  document.write('Es palindromo')
} else {
  document.write('No es palindromo')
}
