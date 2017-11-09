var body = document.getElementsByTagName('body')[0];

class gato {
    constructor(nombre, foto) {
        this.contador = 0;
        this.nombre = nombre;
        this.foto = foto;
        this.mostrada = false;
        this.init();


    }
    init() {
        this.divContador = document.createElement('div');
        this.divContador.innerHTML = this.nombre + ': ' + this.contador;
        this.divContador.setAttribute('onclick', this.nombre + '.esconderGato()');
        this.escribirGato();
    }

    esconderGato() {
        if (this.mostrada) {
            this.imagen.style.visibility = 'hidden';
            this.mostrada = false;
        } else {
            this.imagen.style.visibility = 'visible';
            this.mostrada = true;
        }
    }
    sumaContador() {
        return this.contador += 1;
    }
    clickImagen() {
        this.divContador.innerHTML = this.nombre + ': ' + this.sumaContador();
    }

    escribirGato() {
        var contenedor = document.createElement('div');
        var id_contenedor = this.nombre;
        contenedor.setAttribute('id', id_contenedor);
        this.imagen = document.createElement('img');
        var source = this.foto;
        this.imagen.setAttribute('src', source);
        this.imagen.setAttribute('alt', this.nombre);
        this.imagen.style.width = '400px';
        this.imagen.style.height = '200px';
        this.imagen.style.visibility = 'hidden';
        contenedor.appendChild(this.divContador);
        var evento = this.nombre + '.clickImagen()';
        this.imagen.setAttribute('onclick', evento);
        contenedor.appendChild(this.imagen);
        body.appendChild(contenedor);
    }
}

var Nala = new gato('Nala', 'gato1.jpg');
var Misifu = new gato('Misifu', 'gato2.jpg');
var Panterita = new gato('Panterita', 'gato3.jpg');