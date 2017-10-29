function cambiar(){
	var barra = document.getElementById("barra");
	var contenido = document.getElementById("contenido");
	var body = document.getElementById("body");
	var a = document.getElementById("enlaces");
	var negrita = document.getElementById("bold");
	var marco = document.getElementById("marco");

	body.style.margin="0px";

	barra.style.background = "#72cade";
	barra.style.position = "absolute";
	barra.style.width = "20%";
	barra.style.height = "100%";

	contenido.style.height = "100%";
	contenido.style.width= "100%";
	contenido.style.position = "absolute";
	contenido.style.marginLeft = "20%";
	contenido.style.background = "#eddd8b";

	a.style.border="1px solid black";
	a.style.background="#82d1ed"
	a.style.margin="5px"
	a.style.padding="5px"

	negrita.style.fontWeight="bold"

	marco.style.border="1px solid black";
	marco.style.background="yellow"
	marco.style.margin="5px"
	marco.style.padding="2px"

}

var letra = 1;
function zoom_mas(){
	letra += 0.5;
	document.body.style.fontSize= letra + "em"
}
function zoom_menos(){
	letra -= 0.5;
	document.body.style.fontSize= letra + "em"
}
function justificar(){
	document.body.style.textAlign="justify"
}
function izquierda(){
	document.body.style.textAlign="left"
}
