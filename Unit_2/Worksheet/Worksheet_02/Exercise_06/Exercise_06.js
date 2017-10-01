var a = prompt('Base: ')
var b = prompt('Elevado a: ')
function potencia (a, b) {
  var s = Math.pow(a, b)
  return s
}
document.write(a + ' elevado a ' + b + ' es ' + potencia(a, b))
