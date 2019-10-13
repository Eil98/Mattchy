$(document).ready(function () {
    //Navbar-responsive

    $("#hamb").click(function() {

        $(".menuUL").slideToggle();
        $(".menuUL-UL").css("display", "none");
    });

    $(".menuUL-LI").click(function() {
        $(this).find('ul').slideToggle();
    });



    $(window).resize(function() {
        if($(window).width() > 768) {
            $("ul").removeAttr('style');
            // $("#logoDex").css("display","none");
        }
    });

    var prevScrollPos = 0;

    $(window).scroll(function () {

        var currentScrollPos=$(window).scrollTop();
        console.log(currentScrollPos + " + " + prevScrollPos);
        if(currentScrollPos>prevScrollPos){
            //var isDown=currentScrollPos>prevScrollPos;
            console.log("CooooO");
            $("#navbar").addClass("hidden");
        }else if ( currentScrollPos<prevScrollPos ){
            $("#navbar").removeClass("hidden");
        }
        prevScrollPos=currentScrollPos;

    });

    $(".heart").click(function () {
        console.log("ciaozio");
        $(this).children().toggleClass("far fa-heart");

        $(this).children().toggleClass("fas fa-heart");
    });

    $(".card-img-top").click(function () {
        console.log("weee");
    });



    $(".dropdown").click(function() {
        $(this).find('div').slideToggle();
    });

    $(".closeBtn").click(function () {
        $("#searchOverlay").css("display","none");
    });

    $(".openBtn").click(function () {

        $("#searchOverlay").css("display","block");

    });
    $(".closeBtn").click(function () {
        $("#loginOverlay").css("display","none");

    });

    $(".openBtnLog").click(function () {
        localStorage.setItem('access','null');
        $("#loginOverlay").css("display","block");

    });

    $("#shopCartTrigg").click(function () {
        $(location).attr('href','shoppingCart.html');
    });

    $("#brandTrigg").click(function () {
        $(location).attr('href','Brand.html');
    });

    $(".gotoHome").click(function () {
        $(location).attr('href','mainFinale.html');
    });







});