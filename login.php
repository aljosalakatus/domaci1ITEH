<?php


require "dbBroker.php";
require "model/worker.php";

session_start();
$loginError = "";
if(isset($_POST['username']) && isset($_POST['password'])){
    $uname = $_POST['username'];
    $upass = $_POST['password'];

    //header('Location: home.php');

    //calling static function to check cresidentials
    $response = Worker::logInWorker($uname, $upass, $connection);

    if($response->num_rows==1){
      
        $myArray = array();
        

        if($response){
          while($red = $response->fetch_array()){
            $myArray[] = $red;
          }
        }
        $id = $myArray[0]['idWorker'];
        $_SESSION['idWorker'] = $id;
        header('Location: home.php');
        exit();
    }else{

        $loginError = "Wrong username or password";

    }

    
}



?>
<html>
<head>
<link rel="stylesheet" href="styles/loginStyle.css">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
     
<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
      <img src="img/LaptopServicesLogo.jpg" id="icon" alt="User Icon" />
      <p class="text-danger"><?php echo $loginError;?></p>  

    </div>

    <!-- Login Form -->
    <form method="POST">
      <input type="text" id="username" class="fadeIn second" name="username" placeholder="username" required>
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" required>
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <!-- Remind Passowrd -->
    <!-- <div id="formFooter">
      <a class="underlineHover" href="#"></a>
    </div> -->
    


    </div>
</div>

</body>
</html>
