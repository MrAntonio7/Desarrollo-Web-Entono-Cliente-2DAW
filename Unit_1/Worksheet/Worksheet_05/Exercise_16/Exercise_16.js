function adivina() {
  var n1 = prompt("Turno JUGADOR 1: Introduce un número: ");
  do {
    var n2 = prompt("Turno JUGADOR 2: Adivina el número: ");

    if (n2 > n1) {
      alert("El número a adivinar es más pequeño");
    } else if (n2 < n1){
      alert("El número a adivinar es más grande");
    }
} while (n2 !== n1)
  document.write("Has acertado")
}
adivina();
