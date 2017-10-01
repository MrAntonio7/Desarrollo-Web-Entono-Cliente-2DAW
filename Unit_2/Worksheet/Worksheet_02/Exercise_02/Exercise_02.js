var a = prompt('Dame un angulo en grados: ')
function angulo (n) {
  const p = Math.PI
  let r = (n * p) / 180
  let s = Math.sin(r)
  let c = Math.cos(r)
  let t = Math.tan(r)
  return [s, c, t]
}
document.write('El seno es: ' + angulo(a)[0] + '<br>')
document.write('El coseno es: ' + angulo(a)[1] + '<br>')
document.write('El tangente es: ' + angulo(a)[2] + '<br>')
