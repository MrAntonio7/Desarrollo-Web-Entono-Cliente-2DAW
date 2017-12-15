class Noticia {
    constructor(titulo, fecha, texto, imagen) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.texto = texto;
        this.imagen = imagen;
    }
}

class Controlador {
    constructor() {
        this.collection = [];

    }

    ajax() {
        self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                self.crearNoticias(this);
            }
        };
        xhttp.open("GET", "datos.xml", true);
        xhttp.send();
    }
    crearNoticias(xml) {
        this.view = new Vista();
        var xmlDoc = xml.responseXML;
        var x = xmlDoc.getElementsByTagName("noticia");
        for (var i = 0; i < x.length; i++) {
            var n = new Noticia(x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue,
                x[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue,
                x[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue,
                x[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue);
            this.collection.push(n);
            this.view.maquetaNoticia(n);
        }
    }
}

class Vista {
    constructor() {
        this.crearTabla();
    }
    crearTabla(noticia) {
        //Crea tabla y cabecera
        this.table = document.createElement('table');

        this.cabecera = document.createElement('tr');
        this.table.appendChild(this.cabecera);

        this.column1 = document.createElement('th');
        this.column1.textContent = 'Titulo';
        this.cabecera.appendChild(this.column1);

        this.column2 = document.createElement('th');
        this.column2.textContent = 'Fecha';
        this.cabecera.appendChild(this.column2);

        document.getElementById('tabla').appendChild(this.table);
    }
    maquetaNoticia(noticia) {
        //Crea campos
        var fila = document.createElement('tr');
        this.table.appendChild(fila);

        var val1 = document.createElement('td');
        val1.textContent = noticia.titulo;
        fila.appendChild(val1);

        var val2 = document.createElement('td');
        val2.textContent = noticia.fecha;
        fila.appendChild(val2);

        var contenedor = document.createElement('div');
        document.body.appendChild(contenedor);

        var texto = document.createElement('p');
        texto.textContent = noticia.texto;

        //Crea texto e imagen
        contenedor.appendChild(texto);

        var imagen = document.createElement('img');
        imagen.setAttribute('src', noticia.imagen);

        contenedor.appendChild(imagen);

        //Oculta texto e imagen
        contenedor.style.display = 'None';

        //Funcion para enseñar y ocultar contenedor
        contenedor.setAttribute('visible', "false");
        val1.addEventListener('mouseover', function() { val1.style.cursor = 'pointer'; });
        val1.addEventListener('click', function() {
            if (contenedor.getAttribute('visible') == "false") {
                contenedor.style.display = 'Initial';
                contenedor.setAttribute('visible', "true");
            } else {
                contenedor.style.display = 'None';
                contenedor.setAttribute('visible', "false");
            }
        });
    }

}

window.onload = function() {
    var c = new Controlador();
    setTimeout(function() {
        c.ajax();
    }, 3000);
};