<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#333333">
    <title>Mattchy</title>
    <link rel="stylesheet"  type="text/css" href="Style.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

    <link rel="stylesheet " type="text/css" href="bootstrap-4.3.1-dist/css/bootstrap.min.css">



    <script src="bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>

</head>

<body>
<?php
session_start();
ini_set('display_errors',1);
$localhost="localhost";
$username="root";
$password="root";
$nome_database="sql01";

$mysqli = new mysqli($localhost,$username,$password,$nome_database) or die('errore di connessione'.$mysqli->error());
echo '';

?>

<header class="">


    <div id="myOverlay" class="overlay">
        <span class="closeBtn" title="Close Overlay">×</span>
        <div class="overlay-content">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>



    <div id="navbar" class="">


        <div id="wrapIcon">

            <div id="hamb">
                <i class="fa fa-bars"></i>
            </div>
            <div id="logoMob">
                <a href="#"><img src="LogoMattchy2.png" width="70"></a>
            </div>

            <div class="searchwrap">
                <button class="openBtn"><i class="fa fa-search "></i></button>
            </div>


        </div>


        <ul>

            <li id="logoDex"><a href="#"><img src="LogoMattchy2.png" width="58"></a></li>
            <li class="subMenu"><a href="#"><i class="fas fa-tshirt"></i> <p style="display: inline-block; color: white;margin-bottom: 0px">Category</p><i class="fa fa-sort-desc"></i></a>
                <ul>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">jQuery</p></a></li>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">Vanilla JavaScript</p></a></li>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">ReactJS</p></a></li>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">VueJS</p></a></li>
                </ul>
            </li>
            <li class="subMenu"><a  href="#"><i class="fas fa-user"></i> <p style="display: inline-block; color: white;margin-bottom: 0px;">My Account</p><i class="fa fa-sort-desc"></i></a>
                <ul>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">Wishlist</p></a></li>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">My Adresses</p></a></li>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">My orders</p></a></li>
                    <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">Logout</p></a></li>
                </ul>
            </li>
            <li><a href="#"><i class="fas fa-envelope"></i> <p style="display: inline-block; color: white;margin-bottom: 0px">Contact</p></a></li>
            <li id="shopCart"><a href="#" ><i class="fa fa-shopping-cart"></i> <p style="display: inline-block; color: white;margin-bottom: 0px">Shopping-Cart</p></a></li>


        </ul>

    </div>



</header>
<br>
<br>
<br>