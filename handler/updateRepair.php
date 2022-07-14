<?php
    
    require "../dbBroker.php";
    require "../model/repair.php";

session_start();

if(isset($_POST['descripton']) && isset($_POST['idLaptop']) 
&& isset($_POST['dateFrom']) && isset($_POST['dateTo'])){

    $repair = new Repair(null,$_POST['descripton'],$_SESSION['idWorker'],$_POST['dateFrom'],$_POST['dateTo'],$_POST['idLaptop']);
    
    //$status = Repair::add($repair, $connection);
    $status = $repair->update($_POST['idRepair'],$connection);

    if($status){
        echo 'Success';
    }else{
        echo $status;
        echo "Failed";
    }

}

?>