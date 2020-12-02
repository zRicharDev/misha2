<?php 

	$destino = "";
	$nombre = $_POST["nombre"];
	$telefono = $_POST["telefono"];
	$email = $_POST["email"];
	$mensaje = $_POST["mensaje"];
	$contenido = "Nombre: " .$nombre . "\nTelefono: " . $telefono . "\nEmail: " . $email . "\nMensaje: " . $mensaje ;
	mail($destino,"Contacto",$contenido);

 ?>