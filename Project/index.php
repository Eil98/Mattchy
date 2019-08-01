<?php
/**
 * Created by PhpStorm.
 * User: Ale
 * Date: 15/07/2019
 * Time: 11:14
 */
if (isset($_GET['security']) && $_GET['security']!=""){
    $_SESSION['security'] =(boolean) $_GET['security'];
    echo $_SESSION['security'];
}
$login = false;

if (isset($_SESSION['user']) && $_SESSION['user']!=null){
    $login = true;
    if (isset($_GET['pagina']) && ($_GET['pagina']=="classifica" || $_GET['pagina']=="best_player")) {
        $pagina = $_GET['pagina'];
    }}
        ?>

<script>
    var currentPage = "<?php echo $pagina;?>";
    var cookies = document.cookie.split(";");
    var security = false;
    for (var i = 0; i < cookies.length; i++){
        if (cookies[i].includes("security=")){
            security = (cookies[i].replace("security=", "")).includes("true");
            break;
        }
    }
    console.log(security );
</script>

<html>
<head>
    <meta charset="utf-8">
        <meta name="robots" content="noindex, nofollow">
            <meta name="theme-color" content="#333333">

            <title>Mattchy</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <link rel="stylesheet"  type="text/css" href="Style.css">

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

            <link rel="stylesheet " type="text/css" href="bootstrap-4.3.1-dist/css/bootstrap.min.css">
            <script src="bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
</head>
<body>
<?php
//exit();
session_start();
ini_set('display_errors',1);
$localhost="localhost";
$username="root";
$password="root";
$nome_database="sql01";

$mysqli = new mysqli($localhost,$username,$password,$nome_database) or die('errore di connessione'.$mysqli->error());


include_once("header.php");
include_once($pagina . ".php");
include_once("footer.php");

?>

</body>
</html>
