var svgNS = "http://www.w3.org/2000/svg";

class Cuadrado {
    constructor(id, lado, color) {
        this.id = id;
        this.lado = lado;
        this.color = color;
    }

    vistaCuadrado() {
        this.cuadrado = document.createElementNS(svgNS, "rect");
        this.cuadrado.setAttributeNS(null, "id", this.id);
        this.cuadrado.setAttributeNS(null, "width", this.lado);
        this.cuadrado.setAttributeNS(null, "height", this.lado);
        this.cuadrado.setAttributeNS(null, "fill", this.color);

        document.getElementById("mySVG").appendChild(this.cuadrado);

        this.atributoWidth = this.cuadrado.getAttribute('width');
        this.width = this.atributoWidth.slice(0, this.atributoWidth.length - 2);
    }

    cambiarTamaño() {
        if (this.width <= 350) {
            this.cuadrado.setAttribute('width', (this.width++) + "px");
        }
    }

    animarCuadrado() {
        self = this;
        setInterval(function() {
            self.cambiarTamaño();
        }, 17);
    }

}
window.onload = function() {
    cuadrado = new Cuadrado("cuadrado", "50px", "blue");
    cuadrado.vistaCuadrado();
};