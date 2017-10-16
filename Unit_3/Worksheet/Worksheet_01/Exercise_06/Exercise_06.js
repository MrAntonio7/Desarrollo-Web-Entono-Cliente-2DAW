function potencia(b, e){
  if (e = 0){
    return 1
  } else { return b * potencia(b, --e)
  }
}
document.write(potencia(2,3))
