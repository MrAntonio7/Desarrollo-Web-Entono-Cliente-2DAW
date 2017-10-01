function Reloj() {
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()

  horaImprimible = hora + " : " + minuto + " : " + segundo

  document.form.reloj.value = horaImprimible

  setTimeout("Reloj()", 1000)
}
