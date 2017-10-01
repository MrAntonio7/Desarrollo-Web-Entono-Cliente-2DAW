function writedate () {
  let time = new Date()
  document.write('El año es: ' + time.getFullYear() + '<br>')
  document.write('El mes es: ' + time.getMonth() + '<br>')
  document.write('El dia es: ' + time.getDay() + '<br>')
  document.write('Las horas son: ' + time.getHours() + '<br>')
  document.write('Los minutos son: ' + time.getMinutes() + '<br>')
  document.write('Los segundos son: ' + time.getSeconds() + '<br>')
}
writedate()
