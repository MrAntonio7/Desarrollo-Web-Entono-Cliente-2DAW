function addOnlyNums (...a) {
  let suma = 0
  let cantidad = a.length
  for (let i = 0; i < cantidad; i++) {
    if (a[i] > 0 || a[i] < 0) {
      suma += a[i]
    }
  }
  return suma
};
var valores = [1, 'cat', 3]
document.write(addOnlyNums(...valores))
