<?php

    require "../dbBroker.php";
    require "../model/repair.php";


    if(isset($_POST['id'])){
        $myArray = Repair::getById($_POST['id'], $connection);
        echo json_encode($myArray);
    }

?>