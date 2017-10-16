function lanzamiento() {
  var num = Math.random() * (6 - 1);
  return Math.round(num + 1);
}
document.write(lanzamiento())
