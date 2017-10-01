var r = prompt("Escribe el valor del radio: ");
const PI = 3.1416;

//Esto es un script

function calcCircumfrence(r) {
  var c = 2* PI * r;
  return c
}

function calcArea(r){
  var a = PI * r * r;
  return a
}

function write(){
  document.write("La circunferencia es: " + calcCircumfrence(r) + "<br>");
  document.write("El area es: " + calcArea(r) + "<br>");

}

write();
