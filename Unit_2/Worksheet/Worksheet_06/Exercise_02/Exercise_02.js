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
  //2.d
  document.write(document.images[0].id);
  //2.e
  document.write(document.links.length);
  //2.f
  document.title = 'Cambio de titulo'
}
