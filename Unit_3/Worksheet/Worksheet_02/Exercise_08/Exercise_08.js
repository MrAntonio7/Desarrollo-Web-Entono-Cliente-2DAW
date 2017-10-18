//Devuelvo un numero del 1 a n
function random(n) {
  var num = Math.random() * (n - 1);
  return Math.round(num + 1);
}

//
var dado_01 = random(6);
var dado_02 = random(6);
var suma = dado_01 + dado_02;
document.write("La suma de los dados " + dado_01 + " y " + dado_02 + " es " + suma + "<br>");
//

//Devuelvo una lista con muchas tiradas
function tiradas(n){
  var lista = [];
  for (var i = 0; i < n; i++) {
    lista.push(random(6));
  }
  return lista;
}

var lista_tiradas = tiradas(180000);

//Creo una lista para guardar las ocurrencias, en la posicion 0 la salida del 1...
var veces =[];

//Filtro el numero para crear una array y mirar su longitud
for (var val = 0; val<=6; val++){
veces.push (lista_tiradas.filter(function(value){return value == val;}).length)
}

//Imprimo las posiciones de la array con los 6 numeros
for (var i = 1; i < veces.length; i++) {
  document.write("La ocurrencia del " + i + " es " + veces[i] + "<br>")
}
