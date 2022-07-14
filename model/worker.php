<?php

class Worker{
    public $idWorker;
    public $username;
    public $password;

    public function __construct($idWorker=null,$username=null,$password=null)
    {
        $this->idWorker = $idWorker;
        $this->username = $username;
        $this->password = $password;
    }

    //static function for loging
    public static function logInWorker($formUsername, $formPassword, mysqli $conn)
    {
        $query = "SELECT * FROM worker WHERE username='$formUsername' and password='$formPassword'";
        
        return $conn->query($query);
    }
}



?>