var n1 = prompt('¿Qué tablas quieres multiplicar?')
var n2 = prompt('¿Cuántos número quieres multiplicar?')

function tablas (a, b) {
  for (let x = 0; x <= a; x++) {
    document.write('Tabla ' + x + '<br>')
    for (let y = 0; y <= b; y++) {
      document.write(x + ' x ' + y + '<br>')
    }
  }
}
tablas(n1, n2);
