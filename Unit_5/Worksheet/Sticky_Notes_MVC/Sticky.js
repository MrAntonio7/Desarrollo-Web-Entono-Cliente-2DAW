// MODELO
class Nota {
    constructor(id, titulo, texto, fecha) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.fecha = fecha;
    }

}

// CONTROLADOR
class Controlador {
    constructor() {
        this.coleccion = [];
        this.v = new Vista();
        this.contador = this.loadLocalStorage;
        this.addNote();
    }

    get settime() {
        this.day = new Date();
        this.mydate = this.day.getHours() + ' : ' + this.day.getMinutes() + ' : ' + this.day.getSeconds();
        return this.mydate;
    }

    addNote() {
        this.v.mybutton.setAttribute('onclick', 'c.createNote()');
    }

    createNote() {
        var valores = this.v.campos;
        var note = new Nota(this.contador, valores[0], valores[1], this.settime);
        this.v.drawNote(note.id, note.titulo, note.texto, note.fecha);
        this.coleccion.push(note);
        this.saveLocalStorage();
        console.log('La colección de notas es: ');
        console.log(this.coleccion);
        this.contador += 1;

    }
    modificar(id) {
        var nuevos_valores = this.v.campos;
        this.coleccion[id].titulo = nuevos_valores[0];
        this.coleccion[id].texto = nuevos_valores[1];
        this.coleccion[id].fecha = this.settime;

        this.v.wallpaper.removeChild(document.getElementById(id));
        console.log('Has modificado: ');
        console.log(this.coleccion[id]);
        this.v.drawNote(id, this.coleccion[id].titulo, this.coleccion[id].texto, this.coleccion[id].fecha);
        this.saveLocalStorage();
    }

    borrar(id) {
        this.v.wallpaper.removeChild(document.getElementById(id));
        for (let i = 0; i < this.coleccion.length; i++) {
            if (this.coleccion[i].id == id) {
                this.coleccion.splice(i, 1);
            }
        }
        this.saveLocalStorage();
        console.log('Has borrado la nota');
    }
    saveLocalStorage() {
        localStorage.notas = JSON.stringify(this.coleccion);
    }
    get loadLocalStorage() {
        if (localStorage.notas) {
            this.coleccion = JSON.parse(localStorage.notas);
            for (let i = 0; i < this.coleccion.length; i++) {
                this.v.drawNote(this.coleccion[i].id, this.coleccion[i].titulo, this.coleccion[i].texto, this.coleccion[i].fecha);
            }
            return this.coleccion.length;
        } else return 0;
    }

}

// VISTA

class Vista {
    constructor() {
        this.wallpaper = document.getElementsByTagName('div')[0];
        this.mycolors = ['#ece145', '#6cb3c5', '#aa71bb', '#75ce42', '#c7618b'];
        this.setWallpaper();
    }
    setWallpaper() {
        this.wallpaper.style.width = window.innerWidth + 'px';
        this.wallpaper.style.height = window.innerHeight + 'px';
        this.wallpaper.style.background = '#c0c0c0';
        this.wallpaper.position = "absolute";
        this.wallpaper.style.display = "block";
    }

    get mybutton() {
        this.mybuttonobj = document.createElement('button');
        this.mybuttonobj.textContent = '+';
        this.wallpaper.appendChild(this.mybuttonobj);
        return this.mybuttonobj;
    }

    drawNote(id, titulo, texto, fecha) {

        var n = document.createElement('div');
        n.setAttribute('id', id);
        var mycolor = this.mycolors[Math.floor(Math.random() * this.mycolors.length)];
        n.style.background = mycolor;
        n.style.width = '250px';
        n.style.height = '250px';
        n.style.border = '2px solid black';
        n.style.borderRadius = '3px';
        n.style.boxShadow = "5px 5px 5px grey";
        n.style.position = 'relative';
        n.style.cssFloat = 'left';

        this.wallpaper.appendChild(n);

        var l = document.createElement('ul');
        var i = document.createElement('li');
        var j = document.createElement('li');
        var k = document.createElement('li');
        l.appendChild(i);
        l.appendChild(j);
        l.appendChild(k);
        n.appendChild(l);

        i.textContent = titulo;
        j.textContent = texto;
        k.textContent = fecha;

        l.style.listStyle = "none";
        i.style.fontSize = "22px";
        i.style.textDecoration = "underline";
        i.style.fontWeight = "bold";
        j.style.fontSize = "12px";

        var b1 = document.createElement('button');
        b1.textContent = "Modificar";
        b1.style.backgroundColor = mycolor;
        b1.style.border = "1px solid black";
        b1.style.cursor = "pointer";
        b1.setAttribute("onclick", "c.modificar(" + id + ")");
        b1.style.marginLeft = "15%";
        n.appendChild(b1);

        var b2 = document.createElement('button');
        b2.textContent = "Borrar";
        b2.style.backgroundColor = mycolor;
        b2.style.border = "1px solid black";
        b2.style.cursor = "pointer";
        b2.setAttribute("onclick", "c.borrar(" + id + ")");
        b2.style.marginLeft = "25%";
        n.appendChild(b2);


    }

    get campos() {
        var values = [];
        var a = prompt('Titulo de la nota');
        var b = prompt('Descripcion');
        values.push(a);
        values.push(b);
        return values;
    }
}
window.onload = function() {
    c = new Controlador();
};