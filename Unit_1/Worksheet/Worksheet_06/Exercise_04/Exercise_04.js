function sumEveryOther (...a) {
  let suma = 0
  let cantidad = a.length
  for (let i = 0; i < cantidad; i++) {
    if (a[i] > 0 || a[i] < 0) {
      suma += a[i]
      i++
    }
  }
  return suma
};
var valores = [1, 2, 3, 4, 5]
document.write(sumEveryOther(...valores))
