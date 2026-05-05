 <?php
require_once'header.php';

?>
<?php


 $page='accueil';
if(isset($_GET['page'])){

    

    $page=$_GET['page'];

}


if(file_exists($page.'.php')){
    require_once $page.'.php';
}
else{
    require_once'error.php';
}

?>
<?php
require_once'footer.php';

?>
   
   