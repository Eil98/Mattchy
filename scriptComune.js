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
        if(currentScrollPos>prevScrollPos){
            $("#navbar").addClass("hidden");
        }else if ( currentScrollPos<prevScrollPos ){
            $("#navbar").removeClass("hidden");
        }
        prevScrollPos=currentScrollPos;

    });
    //Graphic

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
        if(localStorage.getItem('access')=="null"){
            $("#loginOverlay").css("display","block");}
            else{
            $(location).attr('href','shoppingCart.html');}
    });

    $("#brandTrigg").click(function () {
        $(location).attr('href','Brand.html');
    });

    $(".gotoHome").click(function () {
        $(location).attr('href','mainFinale.html');
    });

    //login
    if(localStorage.getItem("access")!='null'){
        $('#normalmenu').css('display','none');
        $('#usermenu').css('display','block');
    }
    $("#login-formGroup").submit(function () {
        event.preventDefault();
        var user=localStorage.getItem($('#emailLog').val());
        console.log($('#emailLog').val());
        var tmp=JSON.parse(user);
        console.log(tmp);
        var pw=tmp.password;
        console.log($('#pwLog').val().toString());
        console.log(pw);
        if(pw==$('#pwLog').val().toString()){
            localStorage.setItem('access',$('#emailLog').val());
            console.log(localStorage.getItem('access'));
            $('#normalmenu').css('display','none');
            $('#usermenu').css('display','block');
            $("#loginOverlay").css("display","none");

        }else {
            alert("Incorrect password or email");
            localStorage.setItem('access','null');
        }

    });
    $('#logOut').click(function () {
        localStorage.setItem('access','null');
        $('#normalmenu').css('display','block');
        $('#usermenu').css('display','none');
    })
});