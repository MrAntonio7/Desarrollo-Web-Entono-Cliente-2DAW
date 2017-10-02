function invierteCadena (cad) {
  var x = cad.length
  var y = ''
  while (x >= 0) {
    y += cad.charAt(x)
    x--
  }
  return y
}

function inviertePalabras (cad) {
  var t = ''
  var z = cad.split(' ')
  for (let i = 0; i <= z.length - 1; i++) {
    t += invierteCadena(z[i]) + '&nbsp'
  }
  return t
}

function encuentraPalabraMasLarga (cad) {
  let x = ''
  let c = 0
  let y = cad.split(' ')
  for (let i = 0; i <= y.length - 1; i++) {
    if (y[i].length >= c) {
      x = y[i]
      c = x.length
    }
  }
  return x
}

function fltraPalabrasMasLargas (cad, c) {
  let x = 0
  let y = cad.split(' ')
  for (let i = 0; i <= y.length - 1; i++) {
    if (y[i].length >= c) {
      x++
    }
  }
  return x
}

function cadenaBienFormada (cad) {
  let x = ''
  x = cad[0].toUpperCase() + cad.slice(1, (cad.length)).toLowerCase()
  return x
}
document.write(invierteCadena('caramelo') + '<br>')
document.write(inviertePalabras('Oh un caramelo') + '<br>')
document.write(encuentraPalabraMasLarga('Oh un caramelo') + '<br>')
document.write(fltraPalabrasMasLargas('Oh un caramelo', 2) + '<br>')
document.write(cadenaBienFormada('Oh Un CaRaMelO') + '<br>')
