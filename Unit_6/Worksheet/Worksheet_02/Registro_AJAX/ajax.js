class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Controller {
    constructor() {
        this.vista = new Vista();
        this.collection = [];
        this.consultar();
    }
    instanciar(datos) {
        for (let i = 0; i < datos.length; i++) {
            var u = new Usuario(datos[i].nombre);
            this.collection.push(u);
        }
        console.log(this.collection);
    }
    dar_alternativa(raiz) {
        var alt1 = raiz + "123";
        var alt2 = raiz + ":)";
        var alt3 = raiz + "_" + raiz;
        return alt1 + ', ' + alt2 + ' o ' + alt3 + ' .';
    }
    consultar() {
        this.collection = [];
        var xmlhttp = new XMLHttpRequest();
        var self = this;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                self.instanciar(JSON.parse(this.responseText));
            }

        };
        xmlhttp.open("GET", "servidor.php", true);
        xmlhttp.send();
    }
    comprobar() {
        var valor_a_comprobar = document.getElementById("valor").value;
        for (let i = 0; i < this.collection.length; i++) {
            console.log(valor_a_comprobar);
            console.log(this.collection[i].nombre);
            if (valor_a_comprobar == this.collection[i].nombre) {
                this.vista.imprimir(1, this.dar_alternativa(valor_a_comprobar));
                break;
            } else {
                this.vista.imprimir(0, "");
            }
        }
    }
}

class Vista {
    imprimir(booleano, alternativa) {
        document.getElementById("texto_resultado").innerHTML = '';
        if (booleano == 1) {
            document.getElementById("texto_resultado").innerHTML = 'Ese nombre está registrado <br>';
            document.getElementById("texto_resultado").innerHTML += 'Prueba con: ' + alternativa;
        } else {
            document.getElementById("texto_resultado").innerHTML = 'Ese nombre está disponible';
        }
    }
}


window.onload = function() {
    controlador = new Controller();
    setInterval(function() {
        controlador.consultar();
    }, 5000);
};