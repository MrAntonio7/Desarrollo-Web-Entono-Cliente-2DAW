function otro_fichero() {
    var formulario = document.getElementById('formulario');

    // Salto de linea para cada linea creada y dentro del form
    salto_linea = document.createElement('br');
    formulario.appendChild(salto_linea);

    // Crea input para adjuntar otro fichero y dentro del form
    var nuevo_fichero = document.createElement('input');
    nuevo_fichero.type = 'file';
    formulario.appendChild(nuevo_fichero);

    // Crea el boton para enviar y dentro del form 
    var enviar = document.createElement('button');
    enviar.type = "button";
    enviar.onclick = 'alert("Archivo enviado")';
    enviar.textContent = "Enviar";
    formulario.appendChild(enviar);
}