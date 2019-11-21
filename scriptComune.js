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


    $(".dropdown").click(function() {
        $(this).find('div').slideToggle();
    });


    $(".openBtn").click(function () {

        $("#searchOverlay").css("display","block");

    });
    $(".closeBtn").click(function () {
        $("#loginOverlay").css("display","none");
        $("#searchOverlay").css("display","none");
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

        if(user!=undefined && user.email!==$('#emailLog').val().toString()) {
            console.log($('#emailLog').val());
            var tmp = JSON.parse(user);
            console.log(tmp);
            var pw = tmp.password;
            console.log($('#pwLog').val().toString());
            console.log(pw);
            if (pw == $('#pwLog').val().toString()) {
                localStorage.setItem('access', $('#emailLog').val());
                console.log(localStorage.getItem('access'));
                $('#normalmenu').css('display', 'none');
                $('#usermenu').css('display', 'block');
                $("#loginOverlay").css("display", "none");
                blurt({
                    title: 'Success',


                    text: 'Logged in!',

                    /*
                   * alert type
                   * success, error, warning, info
                   * default is 'default'
                   */
                    type: 'success',

                    okButtonText: 'Ok',

                    escapable: true
                });
            } else {
                blurt({
                    title: 'Error',


                    text: 'Incorrect password',

                    /*
                   * alert type
                   * success, error, warning, info
                   * default is 'default'
                   */
                    type: 'error',

                    okButtonText: 'Ok',

                    escapable: true
                });
                localStorage.setItem('access', 'null');
            }

        }else {
            blurt({
                title: 'Error',


                text: 'Incorrect email',

                /*
               * alert type
               * success, error, warning, info
               * default is 'default'
               */
                type: 'error',

                okButtonText: 'Ok',

                escapable: true
            });
        }
    });
    $('#logOut').click(function () {
        localStorage.setItem('access','null');
        $('#normalmenu').css('display','block');
        $('#usermenu').css('display','none');
    });

    var l = location.href;
    l=l.substr(l.lastIndexOf("/")+1).split(/[?#]/)[0];
    if(l!= "mainFinale.html")
    {
        $("#searchObj").on("click",function () {
            $(location).attr('href','mainFinale.html');
            blurt({
                title: 'Info',


                text: 'You can search items here!',

                /*
               * alert type
               * success, error, warning, info
               * default is 'default'
               */
                type: 'info',

                okButtonText: 'Ok',

                escapable: true
            });
        });
    }


});