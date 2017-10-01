//Esto es un script

function celsiusToFahrenheit() {
  var c = prompt("Introduce temperatura en Celsius: ");
  var ctof = c * 1.8 + 32
  document.write("La temperatura de Celsius a Fahrenheit es:" + ctof + "<br>");
  var a = prompt("¿Quieres tambien convertir de Fahrenheit a Celsius? ");
  if (a != "No"){
    fahrenheitToCelsius();
  }
}

function fahrenheitToCelsius() {
  var f = prompt("Introduce temperatura en Fahrenheit: ");
  var ftoc = (f - 32) * 1.8
  document.write("La temperatura de Fahrenheit a Celsius es:" + ftoc + "<br>");
  var a = prompt("¿Quieres tambien convertir de Celsius a Fahrenheit? ");
  if (a != "No") {
    celsiusToFahrenheit();
  }
}

celsiusToFahrenheit()
//fahrenheitToCelsius()
