function dom(){
  //2.a
  var x = document.anchors.length
  document.write(x + '<br>')
  document.write('<br>')
  //2.b
  //2.c
  var y = document.images.length
  document.write(y + '<br>')
  document.write('<br>')
  //2.c
  document.write(document.images.length);
  document.write(document.images[0].id);
  document.write(document.links.length);
  document.title = 'Cambio de titulo'
}
