<?php

    $destino="info@ichuri.net";
    $asunto = "Desde página de Ichuri.net";
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $comentario = $_POST['comentario'];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nComentario: " . $comentario;
    
    mail($destino, $asunto,$contenido);
    header('Location:gracias.html');
?>