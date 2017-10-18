function random1000(n) {
  var num = Math.random() * (n - 1);
  return Math.round(num + 1);
}

function paresImpares(n){
  var numerossinorden = []
  var numpares = []
  var numimpares = []
  for (let i = 0; i<=n ;i++){
    numerossinorden.push(random1000(1000));
  }
  numerossinorden.forEach(function(x){
    if (x%2 == 0){numpares.push(x)}else{numimpares.push(x)}
  })
  var numfin = numimpares.concat(numpares)
  document.write(numfin)
}

paresImpares(100)
