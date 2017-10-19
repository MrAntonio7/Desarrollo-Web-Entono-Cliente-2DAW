var arrA = [1,2,321,3,4,5];
function apartadoA(array){
  //Sort ordena de menor a mayor con un callback ordenando de uno en uno y pop saca el ultimo
  return (array.sort(function(a,b){return a - b}).pop());
}
document.write("Apartado A: " + apartadoA(arrA) + "<br>");


var arrB = ['aaa', 'ab', 'eeee', 'c'];
function apartadoB(array){
  //Sorr ordena de mayor a menos con un callback ordenando de uno en uno y pop saca el ultimo
  return (array.sort(function(a,b){return a.length - b.length}).pop());
}
document.write("Apartado B: " + apartadoB(arrB)+ "<br>");


var arrCDF = [1,2,3,4,5,6,7];
function apartadoC(array){
  //Devuelve una array filtrando solo los pares
  return (array.filter(function(value){return value%2==0}));
}
document.write("Apartado C: " + apartadoC(arrCDF)+ "<br>");


function apartadoD(array){
  //Devuelve una array filtrando solo los impares
  return (array.filter(function(value){return value%2!=0}));
}
document.write("Apartado D: " + apartadoD(arrCDF)+ "<br>");

var arrE = ['ais','eis','aaa','eee'];
function apartadoE(array){
  //Devuelve una array filtrando solo las palabras que contienen 'is'
  return (array.filter(function(value){return value.includes('is')}));
}
document.write("Apartado E: " + apartadoE(arrE)+ "<br>");


function apartadoF(array){
  //Devuelve una array filtrando solo los divisibles por 3
  return (array.filter(function(value){return value%3==0}));
}
document.write("Apartado F: " + apartadoF(arrCDF)+ "<br>");


function apartadoG(arr1,arr2){
  //Devuelve una array concatenada de dos
  return arr1.concat(arr2);
}
document.write("Apartado G: " + apartadoG(arrE,arrCDF)+ "<br>");


function apartadoH(arr1,arr2){
  //Ordena una array concatenada de dos
  return (arr1.concat(arr2).sort(function(a,b){return a - b}));
}
document.write("Apartado H: " + apartadoH(arrE, arrCDF)+ "<br>");

var arrIJ = [1,2,3,4,5,6];
function apartadoI(array){
  //Devuelve la array apartir de la posicion que le des, en este caso desde la 1, solo elimina la 0
  return array.slice(1, array.length);
}
document.write("Apartado I: " + apartadoI(arrIJ)+ "<br>")


function apartadoJ(array){
  //Concatena un elemento en un array con otra array, poniendolo primero
  return [9].concat(array);

}
document.write("Apartado J: " + apartadoJ(arrIJ)+ "<br>");


function apartadoK(){
  //Modifica el array ORIGINAL desde la posicion 1, eliminando 1, y metiendo el nuevo
  var arrK = ['a','b','c'];
  arrK.splice(1,1,'d');
  return arrK;
}
document.write("Apartado K: " + apartadoK() + "<br>");

var arrL = ['Jose','Antonio','Jesus','Manolito'];
function apartadoL(array){
  //Filtra la array sacando solo elementos que empiecen por J y ordenandolos
  return (array.filter(function(a){return a[0] == 'J'})).sort();
}
document.write("Apartado L: " + apartadoL(arrL)+ "<br>");
