<?php

    require "../dbBroker.php";
    require "../model/repair.php";

    
    if(isset($_POST['id'])){
        $obj = new Repair($_POST['id']);
        $status = $obj->deleteById($connection);
        if ($status){
            echo "Success";
        }else{
            echo "Failed";
        }
    }

?>