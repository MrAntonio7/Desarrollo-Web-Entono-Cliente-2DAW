class Buscaminas {
  constructor(){
    this.matriz = this.iniciar_matriz()
    this.matriz_vacia = this.inicia_matriz_vacia()
    this.bombas = []
    this.tiempo = 100
    this.partida = 1
  }

  iniciar_matriz(){
    //Inicia la matriz vacia
    var m = []
    for (let i = 0;i<8;i++){
      m.push([[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]);
    }
    return m
  }
  inicia_matriz_vacia(){
    var mv = []
    for (let i = 0;i<8;i++){
      mv.push([[0,' '],[0,' '],[0,' '],[0,' '],[0,' '],[0,' '],[0,' '],[0,' ']]);
    }
    return mv
  }

  randomizar_bombas(matriz){
    //Hace la array bombas y mete 10 elementos que nunca se puede repetir
    var contador = 0;
    while (this.bombas.length != 10) {
      var r = [random(7),random(7)];
      this.bombas.push(r);
      if (this.bombas.filter(function(a){return (a[0]==r[0]&&a[1]==r[1]) }).length > 1){
        this.bombas.splice(contador,1)
      }else{contador++}
    }
    //Posiciona las bombas segun la array bombas
    for (let i = 0; i < 10; i++) {
      matriz[this.bombas[i][0]].splice(this.bombas[i][1],1,[0,-1])
    }
    console.log(this.bombas)
    return matriz
  }

  calcular_ejex_ejey_contenido(matriz){
    let lista_casillas = []
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          lista_casillas.push([i,j,matriz[i][j][1]])
      }
    }
    //console.log(lista_casillas)
    return lista_casillas
  }
  ceros_colindantes(matriz){
    var lista_colindantes_a_cero = []
    var lista_ceros = this.calcular_ejex_ejey_contenido(matriz)

    for (var i = 0; i < matriz.length; i++) {
      for (let x = 0;x<lista_ceros.length;x++) {
        if ((lista_ceros[x][2]) != 0 ) {
          lista_ceros.splice(x,1)
      }
    }
  }
    //console.log(lista_ceros)

    for (let x = 0; x < lista_ceros.length; x++) {
      var i = lista_ceros[x][0]
      var j = lista_ceros[x][1]
      if (i == 0 && j == 0){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i,j+1,matriz[i][j+1][1]/2],[i+1,j,matriz[i+1][j][1]/2],[i+1,j+1,matriz[i+1][j+1][1]/2]])
      }
      else if (i == 0 && j == matriz[i].length-1){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i,j-1,matriz[i][j-1][1]/2],[i+1,j-1,matriz[i+1][j-1][1]/2],[i+1,j,matriz[i+1][j][1]/2]])
      }
      else if (i == matriz.length-1 && j == matriz[i].length-1){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i,j-1,matriz[i][j-1][1]/2],[i-1,j-1,matriz[i-1][j-1][1]/2],[i-1,j,matriz[i-1][j][1]/2]])
      }
      else if (i == matriz.length-1 && j == 0 ){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i-1,j,matriz[i-1][j][1]/2],[i-1,j+1,matriz[i-1][j+1][1]/2],[i,j+1,matriz[i][j+1][1]/2]])
      }
      else if (i==0 && 1 <= j < matriz[i].length-1){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i,j-1,matriz[i][j-1][1]/2],[i+1,j-1,matriz[i+1][j-1][1]/2],[i+1,j,matriz[i+1][j][1]/2],[i+1,j+1,matriz[i+1][j+1][1]/2],[i,j+1,matriz[i][j+1][1]/2]])
      }
      else if (1<=i<matriz.length-1 && j==matriz[i].length-1){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i-1,j,matriz[i-1][j][1]/2],[i-1,j-1,matriz[i-1][j-1][1]/2],[i,j-1,matriz[i][j-1][1]/2],[i+1,j-1,matriz[i+1][j-1][1]/2],[i+1,j,matriz[i+1][j][1]/2]])
      }
      else if(i==matriz.length-1&&1<=j<matriz[i].length-1){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i,j-1,matriz[i][j-1][1]/2],[i-1,j-1,matriz[i-1][j-1][1]/2],[i-1,j,matriz[i-1][j][1]/2],[i-1,j+1,matriz[i-1][j+1][1]/2],[i,j+1,matriz[i][j+1][1]/2]])
      }
      else if(1<=i<matriz.length-1&&j==0){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i-1,j,matriz[i-1][j][1]/2],[i-1,j+1,matriz[i-1][j+1][1]/2],[i,j+1,matriz[i][j+1][1]/2],[i+1,j+1,matriz[i+1][j+1][1]/2],[i+1,j,matriz[i+1][j][1]/2]])
      }
      else if(1<=i<matriz.length-1&&1<=j<matriz[i].length-1){
        lista_colindantes_a_cero.push([[i,j,matriz[i][j][1]/2],[i-1,j-1,matriz[i-1][j-1][1]/2],[i-1,j,matriz[i-1][j][1]/2],[i-1,j+1,matriz[i-1][j+1][1]/2],[i,j+1,matriz[i][j+1][1]/2],[i+1,j+1,matriz[i+1][j+1][1]/2],[i+1,j,matriz[i+1][j][1]/2],[i+1,j-1,matriz[i+1][j-1][1]/2],[i,j-1,matriz[i][j-1][1]/2]])
      }
    }
    //console.log(lista_colindantes_a_cero);
    return lista_colindantes_a_cero
  }

  calcular_casillas(matriz){
    var lista_numeros = []
    for (let x = 0; x < 10; x++) {
      var i = this.bombas[x][0]
      var j = this.bombas[x][1]

        if (i == 0 && j == 0){
          lista_numeros.push([i,j+1],[i+1,j],[i+1,j+1])
        }
        else if (i == 0 && j == matriz[i].length-1){
          lista_numeros.push([i,j-1],[i+1,j-1],[i+1,j])
        }
        else if (i == matriz.length-1 && j == matriz[i].length-1){
          lista_numeros.push([i,j-1],[i-1,j-1],[i-1,j])
        }
        else if (i == matriz.length-1 && j == 0 ){
          lista_numeros.push([i-1,j],[i-1,j+1],[i,j+1])
        }
        else if (i==0 && 1 <= j < matriz[i].length-1){
          lista_numeros.push([i,j-1],[i+1,j-1],[i+1,j],[i+1,j+1],[i,j+1])
        }
        else if (1<=i<matriz.length-1 && j==matriz[i].length-1){
          lista_numeros.push([i-1,j],[i-1,j-1],[i,j-1],[i+1,j-1],[i+1,j])
        }
        else if(i==matriz.length-1&&1<=j<matriz[i].length-1){
          lista_numeros.push([i,j-1],[i-1,j-1],[i-1,j],[i-1,j+1],[i,j+1])
        }
        else if(1<=i<matriz.length-1&&j==0){
          lista_numeros.push([i-1,j],[i-1,j+1],[i,j+1],[i+1,j+1],[i+1,j])
        }
        else if(1<=i<matriz.length-1&&1<=j<matriz[i].length-1){
          lista_numeros.push([i-1,j-1],[i-1,j],[i-1,j+1],[i,j+1],[i+1,j+1],[i+1,j],[i+1,j-1],[i,j-1])
        }
      }


         lista_numeros.forEach(function(x){if (matriz[x[0]][x[1]][1] !=-1){matriz[x[0]][x[1]][1]++}})


        return matriz
      }
  casillas_con_numero(){
    var lista_casillas_con_numero = []
    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0;j < this.matriz[i].length; j++) {
        if(this.matriz[i][j][1]>0){
          lista_casillas_con_numero.push([i,j])
        }
      }
    }
    return lista_casillas_con_numero
  }

  desplegar(x,y){
    if(this.partida==1&&this.tiempo>=0){
    this.abrir_casilla(x,y)
    body.innerHTML=" "
    document.write("<body id=\"body\"></body>")
    this.iniciar_tabla(this.matriz_vacia)
  }
  }


  abrir_casilla(x,y){
    let numeros = this.casillas_con_numero()
    let bombas = this.bombas
    let ceros = this.ceros_colindantes(this.matriz)
    if(this.matriz_vacia[x][y][0]==0){
      this.matriz_vacia[x].splice(y,1,this.matriz[x][y])
      if(this.matriz_vacia[x][y][1]==0){
        for (let i = 0; i < ceros.length; i++) {
          if(x== ceros[i][0][0]&&y== ceros[i][0][1]){
            for (let j = 0; j < ceros[i].length; j++) {
              this.abrir_casilla(ceros[i][j][0],ceros[i][j][1])
            }
          }
        }
      }
      else if(this.matriz[x][y][1]>0){
        for (let j = 0; j < numeros.length; j++) {
            this.matriz_vacia[x].splice(y,1,[this.matriz[x][y][0],this.matriz[x][y][1]/2])

        }


      }else{
        this.partida = this.partida - 1
        document.write('<div align=center><p >Pierdes</p></div>')

      }
    }
  }


  iniciar_tabla(matriz){
    //Maqueta una tabla con la matriz
    document.write('<div id="tabla" align=center>')
    document.write('<table bgcolor=\'#CCCCFF\' border = 1>')
    document.write('<tr>')
    document.write('<td></td>')
    for (let i = 0; i < matriz.length; i++) {
      document.write('<td align=center ><b>'+ i +'</b></td>')
    }
    document.write('</tr>')
    for (let i = 0; i < matriz.length; i++) {
      document.write('<tr>')
      document.write('<td align=center width=20px><b>'+ (i) +'</b></td>')
      for (let j = 0; j < matriz[i].length; j++) {
        document.write('<td align=center width=20px>' + matriz[i][j][1] +'</td>')
      }
      document.write('</tr>')
    }
    document.write('</table>')
    document.write('</div>')
  }

  // cronometro(){
  //   this.tiempo-=1
  //   setTimeout(cronometro(),1)
  // }

  main(){
    //document.write('<div align=center><p>' + this.cronometro() + '</p></div>')
    this.calcular_casillas(this.randomizar_bombas(this.matriz));
    this.ceros_colindantes(this.calcular_casillas(this.randomizar_bombas(this.matriz)));
  }
}

function random(n) {
  var num = Math.random() * n;
  return Math.round(num);
}

var B = new Buscaminas();
B.main()
B.iniciar_tabla(B.matriz_vacia)
//B.desplegar(6,0)
//window.onload=B.cronometro();
