function mayusminus (cad){
  var x = ""
  if (cad == cad.toUpperCase()){
    x = "Son todas mayusculas"
  }else if (cad == cad.toLowerCase()) {
    x = "Son todas minusculas"
  }else{
    x = "Tiene minusculas y mayusculas"
  }
  return x
}
document.write(mayusminus('HOLA QUE TAL') +'<br>')
document.write(mayusminus('Hola que tal') +'<br>')
document.write(mayusminus('hola que tal') +'<br>')
