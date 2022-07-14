<?php
/* Attempt MySQL server connection.*/
$connection = new mysqli("localhost", "root", "root", "laptopservices");
 
// Check connection
if($connection === false){
    die("ERROR: COULD NOT CONNECT. " . $mysqli->connect_error);
}

?>
