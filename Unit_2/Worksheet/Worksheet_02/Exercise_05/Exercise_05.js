function segundogrado () {
  var a = parseInt(prompt('Primer coeficiente: '))
  var b = parseInt(prompt('Segundo coeficiente: '))
  var c = parseInt(prompt('Tercer coeficiente: '))
  var d = (Math.pow(b, 2) - (4 * a * c))
  //document.write(d + '<br>')
  if (d > 0) {
    var s1 = (-b + (Math.sqrt(d))) / (2 * a)
    var s2 = (+b + (Math.sqrt(d))) / (2 * a)
    document.write('La primera solucion es: ' + s1 + ' y la segunda solcion es: ' + s2 + '<br>')
  } else {
    document.write('La ecuacion no tiene solucion' + '<br>')
  }
  document.write('La ecuacion es: (' + a + ')x^2 + (' + b + ')x + (' + c + ')' + '<br>')
}
segundogrado()
