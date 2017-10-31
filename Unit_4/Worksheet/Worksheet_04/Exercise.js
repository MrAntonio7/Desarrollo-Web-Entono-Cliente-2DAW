function validarnombre() {
  var nombre = document.getElementById("nombre").value;
  var expnombre = /^[a-zA-Z\s]+$/
  if (expnombre.test(nombre)) {
    document.getElementById("nombre").style.backgroundColor="#b5f195"
    console.log(nombre);
  }else{document.getElementById("nombre").style.backgroundColor="#d67575"}
}

function validarapellido() {
  var apellido = document.getElementById("apellido").value;
  var expapellido = /^[a-zA-Z\s]+$/
  if (expapellido.test(apellido)) {
    document.getElementById("apellido").style.backgroundColor="#b5f195"
    console.log(apellido);
  }else{document.getElementById("apellido").style.backgroundColor="#d67575"}
}

function validardni(){
  var dni = document.getElementById("dni").value;
  var expdni = /^\d{8}[a-zaA-Z]$/
  if (expdni.test(dni)) {
    document.getElementById("dni").style.backgroundColor="#b5f195"
    console.log(dni);
  }else{document.getElementById("dni").style.backgroundColor="#d67575"}
}

function validartelefono(){
  var telefono = document.getElementById("telefono").value;
  var exptelefono = /^\d{9}$/
  if (exptelefono.test(telefono)) {
    document.getElementById("telefono").style.backgroundColor="#b5f195"
    console.log(telefono);
  }else{document.getElementById("telefono").style.backgroundColor="#d67575"}
}

function validaremail(){
  var email = document.getElementById("email").value;
  var expemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
  if (expemail.test(email)) {
    document.getElementById("email").style.backgroundColor="#b5f195"
    console.log(email);
  }else{document.getElementById("email").style.backgroundColor="#d67575"}
}

function validarusuario(){
  var usuario = document.getElementById("usuario").value;
  var expusuario = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  if (expusuario.test(usuario)) {
    document.getElementById("usuario").style.backgroundColor="#b5f195"
    console.log(usuario);
  }else{document.getElementById("usuario").style.backgroundColor="#d67575"}
}
