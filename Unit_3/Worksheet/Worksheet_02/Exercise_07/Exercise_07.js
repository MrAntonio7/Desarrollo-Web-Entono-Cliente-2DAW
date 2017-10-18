
function iniciar_array(x){
  var arr = [x,x,x,x,x,x,x,x,x,x];
  arr = arr.fill(x, 0, 9);
  return arr;
}


 function sum_uno(a){
   for (let i = 0; i < a.length; i++){
     a[i]++;
   }
   return a;
 }

 document.write(sum_uno(iniciar_array(0)));
