// Parrafos para enseñar en el html
var parrafoa = document.getElementById('apartadoa');
var parrafob = document.getElementById('apartadob');
var parrafoc = document.getElementById('apartadoc');
document.getElementsByTagName('body')[0].appendChild(parrafoa);
document.getElementsByTagName('body')[0].appendChild(parrafob);
document.getElementsByTagName('body')[0].appendChild(parrafoc);


class Gato {
    constructor(nombre, edad, tamaño, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.raza = raza;
    }
    get caracteristicas() {
        return 'Hola, me llamo ' + this.nombre + ' tengo ' + this.edad + ' años, mido ' + this.tamaño + ' y soy ' + this.raza + '.';
    }
}

class JaulaGatitos {
    constructor() {
        this.jaula = [];

    }
    añadirGato(gato) {
        this.jaula.push(gato);
    }

    buscarGato(nombreGato) {
        for (var gato = 0; gato < this.jaula.length; gato++) {
            if (nombreGato == this.jaula[gato].nombre) {
                console.log('Hay un gato llamado ' + this.jaula[gato].nombre + ' en la jaula.');
                parrafob.innerHTML = this.jaula[gato].caracteristicas;

            } else {
                console.log('No lo encuentro.');
                parrafob.innerHTML = 'No lo encuentro.';
                
            }
        }
    }
    mostrarGatos() {
        this.cantidad = this.jaula.length;
        console.log('Hay ' + this.cantidad + ' gato.');
        parrafoc.innerHTML = this.cantidad;
        for (var gato = 0; gato < this.jaula.length; gato++) {
            console.log('Total de gatos en la jaula: ' + this.cantidad + ' ;Soy el gato numero ' + (gato + 1) + ': ' + this.jaula[gato].caracteristicas);
            parrafoc.innerHTML = 'Total de gatos en la jaula: ' + this.cantidad + ' ;Soy el gato numero ' + (gato + 1) + ': ' + this.jaula[gato].caracteristicas;
        }
    }
}

window.onload = function() {
    var misifu = new Gato('Misifu', '2', '20cm', 'siamés');

    parrafoa.innerHTML = misifu.caracteristicas;
    console.log(misifu.caracteristicas);
    var carcel = new JaulaGatitos();
    carcel.añadirGato(misifu);
    carcel.buscarGato('Misifu');
    carcel.mostrarGatos();

};