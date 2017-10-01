var num_1 = prompt("Introduce un número: ");
var num_2 = prompt("Introduce otro número: ");


function greaterNum(a, b)
{
  if (a > b)
  {
    document.write(a + " es mayor que " + b);
    return num_1;
  } else {
    document.write(b + " es mayor que " + a);
    return num_2;
  }
}

greaterNum(num_1, num_2);
