function sumAndSquare (...a) {
  let suma = 0
  var c = [...a]
  for (var i = 0; i < c.length; i++) {
    suma += (c[i] * c[i])
  }
  return suma
}

document.write(sumAndSquare(2, 3, 4))
