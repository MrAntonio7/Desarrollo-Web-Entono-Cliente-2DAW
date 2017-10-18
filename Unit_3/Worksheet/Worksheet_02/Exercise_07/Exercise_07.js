
function iniciar_array(x){
  var arr = [x,x,x,x,x,x,x,x,x,x];
  arr = arr.fill(x, 0, 9);
  return arr;
}

 function sum_uno(a){
  return (a.map(function(x){return x + 1;}))
 }

 document.write(sum_uno(iniciar_array(0)));
