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
        this.contador = 0;
        this.v = new Vista();
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
        n.style.width = '200px';
        n.style.height = '200px';
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

        var b = document.createElement('button');
        b.textContent = "Modificar";
        b.style.backgroundColor = mycolor;
        b.style.border = "1px solid black";
        b.style.cursor = "pointer";
        b.setAttribute("onclick", "c.modificar(" + id + ")");
        b.style.marginLeft = "25%";
        n.appendChild(b);

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