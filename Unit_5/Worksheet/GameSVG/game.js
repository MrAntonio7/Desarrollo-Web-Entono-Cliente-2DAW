class campo {
    constructor() {
        this.campo = document.getElementById('campo');
        this.linea = document.getElementById('linea');
        this.style_campo();
    }

    style_campo() {
        this.campo.style.background = "#000";
        this.campo.style.borderTop = "5px solid white";
        this.campo.style.borderBottom = "5px solid white";
        this.campo.style.borderLeft = "5px dotted white";
        this.campo.style.borderRight = "5px dotted white";
        this.ancho = 900;
        this.alto = 600;
        this.campo.style.width = "900px";
        this.campo.style.height = "600px";
        this.linea.setAttribute('width', "1px");
        this.linea.setAttribute('height', "600px");
        this.linea.setAttribute('fill', "white");
        this.linea.setAttribute('x', "450px");
    }

}

class jugador {
    constructor(num) {
        this.numero = num;
        this.jugador = document.getElementById('j' + this.numero);
        if (this.numero == 1) {
            this.posicion_inicial_j1();
        } else {
            this.posicion_inicial_j2();
        }
        this.marcador_j1 = document.getElementById('marcador_j1');
        this.goles_j1 = 0;
        this.marcador_j2 = document.getElementById('marcador_j2');
        this.goles_j2 = 0;
        this.style_jugador();
    }

    style_jugador() {

        this.jugador.setAttribute("width", "10");
        this.jugador.setAttribute("height", "100");

        this.marcador_j1.setAttribute('style', "font-size: 60px");
        this.marcador_j1.setAttribute('fill', "white");
        this.marcador_j1.setAttribute('x', "300");
        this.marcador_j1.setAttribute('y', "80");
        this.marcador_j2.setAttribute('style', "font-size: 60px");
        this.marcador_j2.setAttribute('fill', "white");
        this.marcador_j2.setAttribute('x', "520");
        this.marcador_j2.setAttribute('y', "80");
    }

    posicion_inicial_j1() {
        this.jugador.setAttribute("fill", "#35F0F9");
        this.jugador.setAttribute("x", 1);
        this.jugador.setAttribute("y", 250);

    }
    posicion_inicial_j2() {
        this.jugador.setAttribute("fill", "#F52A90");
        this.jugador.setAttribute("x", 889);
        this.jugador.setAttribute("y", 250);

    }
    gol() {
        if (this.numero == 1) {
            this.goles_j1 += 1;
            this.marcador_j1.innerHTML = this.goles_j1;
        } else {
            this.goles_j2 += 1;
            this.marcador_j2.innerHTML = this.goles_j2;
        }
    }
}

class pelota {
    constructor() {
        this.pelota = document.getElementById("pelota");
        this.style_pelota();
        this.pelota.movx = parseInt(this.pelota.getAttribute('movx'));
        this.pelota.movy = parseInt(this.pelota.getAttribute('movy'));
        this.pelota.radiox = parseInt(this.pelota.getAttribute('r'));
        this.pelota.radioy = parseInt(this.pelota.getAttribute('r'));
        this.velocidad = 1;


    }
    style_pelota() {
        this.pelota.setAttribute('fill', 'white');
        this.pelota.setAttribute('r', '5');
        this.pelota.setAttribute('cx', '450');
        this.pelota.setAttribute('cy', '300');
        this.pelota.setAttribute('movx', '1');
        this.pelota.setAttribute('movy', '1');
    }
    sonido_pared() {
        this.sonido_1 = document.getElementsByTagName('audio')[0];
        this.sonido_1.currentTime = 0;
        this.sonido_1.play();
    }
    sonido_choque() {
        this.sonido_2 = document.getElementsByTagName('audio')[1];
        this.sonido_2.currentTime = 0;
        this.sonido_2.play();
    }
    pelota_color1() {
        this.pelota.setAttribute('fill', '#35F0F9');
    }
    pelota_color2() {
        this.pelota.setAttribute('fill', '#F52A90');
    }


}

var balon = new pelota();
var campo_juego = new campo();
var jugador_1 = new jugador(1);
var jugador_2 = new jugador(2);


function mover_pelota() {
    var coor_x = parseInt(balon.pelota.getAttribute('cx')) + balon.pelota.radiox;
    var coor_y = parseInt(balon.pelota.getAttribute('cy')) + balon.pelota.radioy;

    if (coor_x > campo_juego.ancho || coor_x < 0) {
        if (coor_x > campo_juego.ancho) {
            if (coor_y < parseInt(jugador_2.jugador.getAttribute("y")) || coor_y > parseInt(jugador_2.jugador.getAttribute("y")) + 115) {
                jugador_1.gol();
                balon.sonido_choque();
            } else { balon.pelota_color2(); }

        } else if (coor_x < 0) {
            if (coor_y < parseInt(jugador_1.jugador.getAttribute("y")) || coor_y > parseInt(jugador_1.jugador.getAttribute("y")) + 115) {
                jugador_2.gol();
                balon.sonido_choque();
            } else { balon.pelota_color1(); }
        }
        balon.sonido_pared();
        balon.pelota.movx *= -1;
        balon.pelota.radiox *= -1;
    } else if (coor_y > campo_juego.alto || coor_y < 0) {
        balon.sonido_pared();
        balon.pelota.movy *= -1;
        balon.pelota.radioy *= -1;
    }

    balon.pelota.setAttribute('cx', parseInt(balon.pelota.getAttribute('cx')) + balon.pelota.movx);
    balon.pelota.setAttribute('cy', parseInt(balon.pelota.getAttribute('cy')) + balon.pelota.movy);
}

function mover_jugadores() {
    document.addEventListener('keypress', function(e) {
        if (e.keyCode == 119 && parseInt(jugador_1.jugador.getAttribute("y")) > 0) {
            jugador_1.jugador.setAttribute("y", parseInt(jugador_1.jugador.getAttribute("y")) - 20);
        }
        if (e.keyCode == 115 && parseInt(jugador_1.jugador.getAttribute("y")) < campo_juego.alto - parseInt(jugador_1.jugador.getAttribute('height'))) {
            jugador_1.jugador.setAttribute("y", parseInt(jugador_1.jugador.getAttribute("y")) + 20);
        }
        if (e.keyCode == 112 && parseInt(jugador_2.jugador.getAttribute("y")) > 0) {
            jugador_2.jugador.setAttribute("y", parseInt(jugador_2.jugador.getAttribute("y")) - 20);
        }
        if (e.keyCode == 108 && parseInt(jugador_2.jugador.getAttribute("y")) < campo_juego.alto - parseInt(jugador_2.jugador.getAttribute('height'))) {
            jugador_2.jugador.setAttribute("y", parseInt(jugador_2.jugador.getAttribute("y")) + 20);
        }
    }, false);

}


window.onload = function() {

    mover_jugadores();
    setInterval(mover_pelota, balon.velocidad);
};