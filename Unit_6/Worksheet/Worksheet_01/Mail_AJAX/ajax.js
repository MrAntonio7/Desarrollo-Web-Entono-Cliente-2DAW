// MODELO
class Email {
    constructor(r, d, a, des) {
        this.remitente = r;
        this.destinatario = d;
        this.asunto = a;
        this.descripcion = des;
    }
}

// CONTROLADOR
class Controlador {
    constructor() {
        this.vista = new Vista();
        this.bandeja = [];
        this.get_correos(); //AJAX conecta al servidor
    }

    nuevo_email(remitente, destinatario, asunto, descripcion) {
        var email = new Email(remitente, destinatario, asunto, descripcion); //Crea objeto Email
        this.bandeja.push(email);
        this.vista.CrearVistaEmail(email, this.bandeja.length);
    }

    crear_emails(correos) { // correos es array con todos los parametros  separados de todos los emails
        var num_campos = 4; //Salto del numero de campos de los correos, recorriendo el array
        for (let i = 0; i < correos.length; i += num_campos) {
            this.nuevo_email(correos[i], correos[i + 1], correos[i + 2], correos[i + 3]); //Creo objeto Email
            console.log('Remitente: ' + correos[i] + ' ;Destinatario: ' + correos[i + 1] + ' ;Asunto: ' + correos[i + 2] + ' ;Descripcion: ' + correos[i + 3]);
        }
    }

    procesar_datos(datos) {
        var sin_saltos_linea = datos.replace(/(\r\n|\n|\r)/gm, ""); //Elimina todos los saltos de linea de la cadena
        var sin_espacios = sin_saltos_linea.replace(/\s{2,}/g, ",").substring(1); //Reemplaza secuencia de blancos y separa por comas. Quita la primera coma del string.
        var parametros = (sin_espacios.split(",")); //Obtengo lista con cada parametro
        parametros.pop(); //Saco ultimo espacio generado de la lista
        this.crear_emails(parametros); //Crea objetos Emails pasandole los datos procesados
        console.log(this.bandeja);
    }

    //AJAX
    get_correos() {
        var xhttp = new XMLHttpRequest();
        var self = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                self.procesar_datos(this.responseText); // Proceso ese string (Leer linea siguiente linea)
            }
        };
        xhttp.open("GET", "servidor.php?s=" + this.bandeja.length, true); //Obtengo los datos(string) sin procesar
        xhttp.send();
    }
}

//VISTA
class Vista {
    constructor() {
        this.contenedor_bandeja = document.getElementsByTagName('tbody')[0];
        this.cabecera = document.getElementById('cabecera');
        this.title = document.getElementsByTagName('title')[0];
    }
    cambiarTitle(num) {
        this.title.innerHTML = 'HackerMail (' + num + ')';
    }
    insertAfter(nodo) {
        this.contenedor_bandeja.insertBefore(nodo, this.cabecera.nextSibling);
    }
    CrearVistaEmail(email, num) {
        var linea = document.createElement('tr');
        var columna1 = document.createElement('td');
        var columna2 = document.createElement('td');
        var columna3 = document.createElement('td');
        var columna4 = document.createElement('td');
        linea.appendChild(columna1);
        linea.appendChild(columna2);
        linea.appendChild(columna3);
        linea.appendChild(columna4);
        columna1.innerHTML = email.remitente;
        columna2.innerHTML = email.destinatario;
        columna3.innerHTML = email.asunto;
        columna4.innerHTML = email.descripcion;
        this.insertAfter(linea);
        this.cambiarTitle(num);
    }
}

window.onload = function() {
    var controlador = new Controlador();
    setInterval(function() {
        controlador.get_correos();
    }, 1000);
};