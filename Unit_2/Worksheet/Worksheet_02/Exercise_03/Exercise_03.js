function hipotenusa() {
  let h1 = prompt('Dame primer cateto: ')
  let h2 = prompt('Dame segundo cateto: ')
  let h = Math.hypot(h1, h2)
  return h
}
document.write(hipotenusa())
