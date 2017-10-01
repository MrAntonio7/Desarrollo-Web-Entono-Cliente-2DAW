var jug1 = prompt("Turno JUGADOR 1: Introduce un número: ");
var jug2 = prompt("Turno JUGADOR 2: Adivina el número: ");

function adivina (n1, n2) {
  while (n2 !== n1) {
    if (n2 > n1) {
      alert("El número a adivinar es más pequeño");
    } else {
      alert("El número a adivinar es más grande");
    }
    n2 = prompt("Turno JUGADOR 2: Adivina el número: ");
  }
  document.write("Has acertado")
}
adivina(jug1, jug2);
