function lista_nueva() {
    var lista_padre = document.getElementById('lista');
    var li = document.createElement('li');
    li.innerHTML = "Elemento";
    lista_padre.appendChild(li);
}

function main() {
    var body = document.body;
    var lista = document.createElement('ul');
    lista.id = "lista";
    body.appendChild(lista);
}

window.onload = function() {
    main();
};