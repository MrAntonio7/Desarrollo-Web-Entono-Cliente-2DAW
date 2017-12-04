<?php
    $data = file_get_contents("datos.json");
    $usuarios = json_decode($data);

    // foreach($usuarios as $usuario){
    //     echo $usuario->nombre;
    // }
   
    $datos_a_dar = json_encode($usuarios);
    print_r($datos_a_dar);
?>