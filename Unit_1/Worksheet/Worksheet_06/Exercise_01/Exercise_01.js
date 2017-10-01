function sum (...a) {
  let suma = 0
  let cantidad = a.length
  for (let i = 0; i < cantidad; i++) {
    suma += a[i]
  }
  return suma
};
var valores = [1, 2, 3]
document.write(sum(...valores))
