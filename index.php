 <?php
require_once'header.php';
require_once __DIR__.'/../Config/db.php';

?>
<?php


 $page='accueil';
if(isset($_GET['page'])){
    $page=$_GET['page'];

}
$sql = "SELECT articles.Title, articles.Content 
        FROM articles
        INNER JOIN pages ON articles.Id_pages = pages.Id_pages
        WHERE pages.Name = :name";
$stmt = $pdo->prepare($sql );
$stmt->execute([':name' => $page]); 
$article = $stmt->fetch(PDO::FETCH_ASSOC);


if($article) {
   
    echo "<h1 class='text-3xl font-bold text-blue-600 mb-4'>" . htmlspecialchars($article['Title']) . "</h1>";
   echo "<div class='prose prose-slate max-w-none'>";
    echo $article['Content'];
echo "</div>";

}
elseif(file_exists($page.'.php')){
    require_once $page.'.php';
}
else{
    require_once'error.php';
}


?>
<?php
require_once'footer.php';

?>
   
   