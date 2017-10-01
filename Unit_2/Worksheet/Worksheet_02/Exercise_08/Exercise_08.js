var imagenes = ['https://i.pinimg.com/736x/5e/22/5c/5e225c66225c93d36c4eb3810a761490--goku-drawing-goku-super.jpg',
  'https://i.pinimg.com/736x/a1/1a/a9/a11aa963a8856346629e14279f09f73b--dragonball-super-goku-super-sayajin.jpg',
  'https://i.pinimg.com/736x/f0/81/bd/f081bd6dcd1a4bc0647951f2d3a2ff58--dragonball-z-games-son-goku.jpg'
]

function random (x) {
  var aleatorio = parseInt(Math.random() * x.length)
  document.write('<img src=' + x[aleatorio] + '>')
}
random(imagenes)
