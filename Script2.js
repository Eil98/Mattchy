$(document).ready(function () {

    //Navbar-responsive

    $("#icon").click(function() {
        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });

    $("ul li").click(function() {
        $("ul ul").slideUp();
        $(this).find('ul').slideToggle();
    });

    $(window).resize(function() {
        if($(window).width() > 768) {
            $("ul").removeAttr('style');
        }
    });

    var prevScrollPos=$(window).pageYOffset;
    $(window).scroll(function () {
        var currentScrollPos=$(window).pageYOffset;
        //var isDown=currentScrollPos>prevScrollPos;
        if(currentScrollPos>prevScrollPos){
            $("#navbar").addClass("scrolled");
        }else if ( currentScrollPos<prevScrollPos ){
            $("#navbar").removeClass("scrolled");
        }
        prevScrollPos=currentScrollPos;

    });


});