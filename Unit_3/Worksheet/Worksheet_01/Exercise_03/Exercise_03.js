function lanzamiento() {
  var num = Math.random() * (6 - 1);
  return Math.round(num + 1);
}
var array = [0,0,0,0,0,0]
function contarlanzamiento(){
for (let i = 0; i <= 6000; i++){
  switch(lanzamiento()){
    case 1:
    array[0]++;
    break;
    case 2:
    array[1]++;
    break;
    case 3:
    array[2]++;
    break;
    case 4:
    array[3]++
    break;
    case 5:
    array[4]++
    break;
    case 6:
    array[5]++
    break;
  }
}
return array
}
document.write(contarlanzamiento())
