$(document).ready(function () {
    console.log("pronto");
    //Navbar-responsive

    $("#hamb").click(function() {

        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });

    $("ul li").click(function() {
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


});