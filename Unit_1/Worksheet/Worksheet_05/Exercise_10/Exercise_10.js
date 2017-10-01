var a = prompt("Introduce repeticiones: ");

function cabecera(x)
{
  for (; x > 0 ; x--)
  {
    document.write("<h" + x + "> Cabecera" + x + "</h" + x + ">")
  }
}

cabecera(a);
