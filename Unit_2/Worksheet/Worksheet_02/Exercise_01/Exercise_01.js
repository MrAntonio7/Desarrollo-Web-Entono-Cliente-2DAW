function random1 () {
  let r = Math.round(Math.random())
  return r
}

function random2 (num1, num2) {
  let r = Math.round(Math.random() * (num2 - num1) + parseInt(num1))
  return r
}
function random3 () {
  let num1 = prompt('Origen: ')
  let num2 = prompt('Fin: ')
  let r = Math.round(Math.random() * (num2 - num1) + parseInt(num1))
  return r
}

document.write(random1() + '<br>')
document.write(random2(100, 200) + '<br>')
document.write(random3() + '<br>')
