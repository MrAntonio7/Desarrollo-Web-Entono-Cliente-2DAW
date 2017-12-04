<?php


if (file_exists('datos.xml')) {
	$req = $_REQUEST["s"];
	$xml = simplexml_load_file('datos.xml');
    get_datos($req);
} else {
    exit('Error abriendo datos.xml');
}

function get_datos($slice){
	$xml = simplexml_load_file('datos.xml');
	$datos = array();
	foreach($xml->correo as $email){
		// echo $email->remitente.$email->destinatario.$email->asunto.$email->descripcion."<br>";
		array_push($datos, $email->remitente.$email->destinatario.$email->asunto.$email->descripcion);
	}
	$datos_a_mandar = array_slice($datos, $slice);
	for($i = 0; $i < count($datos_a_mandar); $i++){
			print_r ($datos_a_mandar[$i]);
	}
}

?>