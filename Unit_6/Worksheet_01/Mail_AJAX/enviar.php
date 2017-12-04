<?php

$r = $_POST["remitente"];
$d= $_POST["destinatario"];
$a = $_POST["asunto"];
$des = $_POST["descripcion"];
$xml =new DOMDocument("1.0","UTF-8");
$xml -> load("datos.xml");
$emails = $xml -> getElementsByTagName('correos') -> item(0);
$n = $xml -> createTextNode("\n");
$t = $xml -> createTextNode("\t");
$correo = $xml -> createElement('correo');
$correo ->appendChild($n);
$correo ->appendChild($t);
$correo ->appendChild($t);
$remitente = $xml ->createElement('remitente', "\n"."\t"."\t"."\t".$r."\n"."\t");
$correo ->appendChild($n);
$correo ->appendChild($t);
$correo ->appendChild($t);
$destinatario = $xml ->createElement('destinatario', "\n"."\t"."\t"."\t".$d."\n"."\t");
$correo ->appendChild($n);
$correo ->appendChild($t);
$correo ->appendChild($t);
$asunto = $xml ->createElement('asunto', "\n"."\t"."\t"."\t".$a."\n"."\t");
$correo ->appendChild($n);
$correo ->appendChild($t);
$correo ->appendChild($t);
$descripcion = $xml ->createElement('descripcion', "\n"."\t"."\t"."\t".$des."\n"."\t"."\t");
$correo ->appendChild($remitente);
$correo ->appendChild($destinatario);
$correo ->appendChild($asunto);
$correo ->appendChild($descripcion);
$emails ->appendChild($correo);
$xml ->save('datos.xml');
header("Location: redactar.html");

?>