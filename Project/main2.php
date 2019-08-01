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



?>

<header class="">


    <div id="searchOverlay" class="overlay">
        <span class="closeBtn" title="Close Overlay">×</span>
        <div class="overlay-content">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit" id="logSubmit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>

    <div id="loginOverlay" class="overlay">
        <span class="closeBtn" title="Close Overlay">×</span>
        <div class="overlayLog-content">
            <form action="main2.php" class="login-content" id="login-formGroup">
                <p style="color: white; font-size: 40px">Login</p>
                <br>
                <input type="email" class="formOverlay" id="emailLog" placeholder="Username" name="username" required="required">
                <br>
                <input type="password" class="formOverlay" id="pwLog" placeholder="Password" name="password" required="required">
               <!-- <a href="registrationacc.html">[Sign Up]Do you already have an account?If not,Click here!</a>-->
                <button type="submit"  class="buttonOverlay" id="logsub">Submit</button>
                <button type="button" class="buttonOverlay2" data-toggle="tooltip" data-placement="bottom" title="Create an account here!"><a href="registrationacc.html">Sign Up</a></button>
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
                <li><a href="#"><i class="fas fa-envelope"></i> <p style="display: inline-block; color: white;margin-bottom: 0px">Contact</p></a></li>
                <li id="shopCart"><a href="#" ><i class="fa fa-shopping-cart"></i> <p style="display: inline-block; color: white;margin-bottom: 0px">Shopping-Cart</p></a></li>

                <li class="subMenu" id="submenu-user">
                    <a href="#" class="openBtnLog" id="normalmenu"><i class="fas fa-user"></i> <p style="display: inline-block; color: white;margin-bottom: 0px;">Sign Up/Log in</p></a>

                    <div class="hidden" id="usermenu">
                        <a href="#" ><i class="fas fa-user"></i> <p style="display: inline-block; color: white;margin-bottom: 0px;">My Account</p><i class="fa fa-sort-desc"></i></a>
                        <ul>
                            <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">Wishlist</p></a></li>
                            <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">My Adresses</p></a></li>
                            <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">My orders</p></a></li>
                            <li><a href="#"><p style=" color:#ffffff;margin-bottom: 0px;">Logout</p></a></li>
                        </ul>
                    </di v>
                </li>


            </ul>

        </div>



    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>




    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <div class="container-fluid">
                        <div clas="row">
                            <div class="col-lg-11 col-md-11 col-sm-10 col-xs-10">
                                <h4 class="modal-title" id="exampleModalLabel">Login</h4>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 pull-right">
                                <button type="button " class="chiudi" style="alignment: right" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

                <form action="controllalogin.php" method="post">
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div clas="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-4">
                                    <form action="controllalogin.php" method="post">
                                        <label>Nome utente:</label>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-8">
                                    <input type="text" required style="width:90%;" class=" form-control" name="nome_ut" >
                                </div>
                            </div>

                            <div clas="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-4">
                                    <label>Password:</label>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-8">
                                    <input type="password" required style="width:90%;"  class="max-width form-control" name="password">

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <input button type="button" class="button2" data-dismiss="modal" value="Chiudi">
                        <input button type="submit" name="invia" value="Accedi" class="button">
                    </div>
                </form>
            </div>
        </div>
    </div>



</header>
<br>
<br>
<br>

<div class="container-fluid">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
    <div class= "btn-toolbar justify-content-center" role="group" >

        <div class="btn-toolbar" role="rowgroup">

            <div class="btn-group-sm dropdown margin-flter" role="group" aria-label="">
                <!-- <div class="dropdown  col-sm-6 col-md-4 col-lg-2 col-xl-2" >-->
                <button type="button" class="btn btn-outline-secondary dropdown-toggle " data-toggle="dropdown">
                    Category
                </button>

                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">T-shirt</a>
                    <a class="dropdown-item" href="#">Pants</a>
                    <a class="dropdown-item" href="#">Jackets</a>
                </div>

            </div>

            <!-- <div class="dropdown  col-sm-6 col-md-4 col-lg-2 col-xl-2" >-->
            <div class="btn-group-sm dropdown margin-flter" role="group">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle " data-toggle="dropdown">
                    Gender
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">F</a>
                    <a class="dropdown-item" href="#">M</a>
                </div>
            </div>

            <!-- <div class="dropdown  col-sm-6 col-md-4 col-lg-2 col-xl-2" >-->
            <div class="btn-group-sm dropdown margin-flter" role="group">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                    Brand
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Gucci</a>
                    <a class="dropdown-item" href="#">Balenciaga</a>
                    <a class="dropdown-item" href="#">Stone Island</a>

                </div>
            </div>
        </div>

        <div class="btn-toolbar" role="rowgroup">

            <div class="btn-group-sm dropdown margin-flter" role="group">
            <!--<div class="dropdown  col-sm-6 col-md-4 col-lg-2 col-xl-2" >-->
                <button type="button" class="btn btn-outline-secondary dropdown-toggle " data-toggle="dropdown">
                    Sizes
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">XS</a>
                    <a class="dropdown-item" href="#">S</a>
                    <a class="dropdown-item" href="#">M</a>
                    <a class="dropdown-item" href="#">L</a>
                    <a class="dropdown-item" href="#">XL</a>
                    <a class="dropdown-item" href="#">XXL</a>
                </div>
            </div>

            <div class="btn-group-sm dropdown margin-flter" role="group">
           <!-- <div class="dropdown col-sm-6 col-md-4 col-lg-2 col-xl-2" >-->
                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                Sort by
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Price Lower-Higher</a>
                    <a class="dropdown-item" href="#">Price Higher-Lower</a>
                    <a class="dropdown-item" href="#">Alphabetical (A-Z)</a>
                </div>
            </div>

            <div class="btn-group-sm dropdown margin-flter" role="group">
           <!-- <div class=" col-sm-6 col-md-4 col-lg-2 col-xl-2">-->
                <button type="button" class="btn btn-outline-danger ">Reset Filters</button>
            </div>

        </div>
    </div>

<!--
    <div class="btn-group">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" id="menu1"type="button" data-toggle="dropdown" >
                Categorie
            </button>

            <div class="dropdown-menu" aria-labelledby="menu1">
                <a class="dropdown-item" href="#">T-shirt</a>
                <a class="dropdown-item" href="#">Pants</a>
                <a class="dropdown-item" href="#">Jackets</a>
            </div>
        </div>

        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <a class="dropdown-item" href="#">Price</a>
                <a class="dropdown-item" href="#">Name</a>
            </div>
        </div>
    </div>
-->


        <div class="card-group">

            <div class="card text-center">
                <img src="prova.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                    <h5 class="card-title">Card title</h5>

                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button class="btn btn-primary " >Add to cart</button>
                </div>
            </div>
            <div class="card text-center">
                <img src="prova.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                    <h5 class="card-title">Card title</h5>

                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button class="btn btn-primary " >Add to cart</button>
                </div>
            </div>
            <div class="card text-center">
                <img src="prova.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                    <h5 class="card-title">Card title</h5>

                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button class="btn btn-primary " >Add to cart</button>
                </div>
            </div>
        </div>

        <div class="card-group">

        <div class="card text-center">
            <img src="prova.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                <h5 class="card-title">Card title</h5>

                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary " >Add to cart</button>
            </div>
        </div>
        <div class="card text-center">
            <img src="prova.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                <h5 class="card-title">Card title</h5>

                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary " >Add to cart</button>
            </div>
        </div>
        <div class="card text-center">
            <img src="prova.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                <h5 class="card-title">Card title</h5>

                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary " >Add to cart</button>
            </div>
        </div>
    </div>
        <div class="card-group">

        <div class="card text-center">
            <img src="prova.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                <h5 class="card-title">Card title</h5>

                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary " >Add to cart</button>
            </div>
        </div>
        <div class="card text-center">
            <img src="prova.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                <h5 class="card-title">Card title</h5>

                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary " >Add to cart</button>
            </div>
        </div>
        <div class="card text-center">
            <img src="prova.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-link heart" style="float: right"><i class="far fa-heart "></i> </button>
                <h5 class="card-title">Card title</h5>

                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary " >Add to cart</button>
            </div>
        </div>
    </div>

</div>
        <footer>
            <div id="footerSup">
                <div>
                   <i class=" foot-icon fas fa-lock"></i><br>
                </div>
                <bold>Secure payment</bold>
                <p style="font-weight: lighter"> thanks to our secure server and encryption methods,your payment cart won't be stolen. </p>
                <br>
                <div>
                <i class="foot-icon fas fa-check"></i><br>
                </div>
                <bold>Free shipping</bold>
                <p style="font-weight: lighter"> For 50€ minimum order.Secure shipping with SDA.</p>
                <hr>

                <bold>Client Service</bold>

              <p style="font-weight: lighter">  Email:info@mattchy.com</p>
                <br>
                <br>
                <hr>
                <bold>Social</bold>
                <br>
                <br>
                <div>
                <a href="#"><i class=" soc-icon fab fa-facebook-f"></i></a>
                <a href="#"> <i class="soc-icon  fab fa-instagram"></i></a>
                <a href="#"><i class="soc-icon fab fa-twitter"></i></a>
                <a href="#"><i class="soc-icon fab fa-linkedin-in"></i></a>
                <a href="#"><i class="soc-icon fab fa-pinterest-p"></i></a>
                </div>
            </div>
            <div id="footerInf">
                © 2002-2019 - GRAFFITISHOP® è un marchio registrato di proprietà di Pluss srl, via F.d'Ovidio, 3 Milano
                    <br>Reg. Imp. Cam. Comm. PV 02225020185 - Cap. Soc. 50.000 € I.V. - P.Iva 02225020185


            </div>

        </footer>

    <script src="jquery.js"></script>
    <script src="loginProcess1.js"></script>
    <script src="script1.js"></script>

    </body>
    </html>