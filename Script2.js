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

    (function ($) {
        $(document).ready(function(){
            var prevScrollPos = 0;

            $(window).scroll(function () {

                var currentScrollPos=$(window).scrollTop();
                console.log(currentScrollPos + " + " + prevScrollPos);
                if(currentScrollPos>prevScrollPos){
                    //var isDown=currentScrollPos>prevScrollPos;
                    console.log("CIAOO");
                    $("#navbar").addClass("hidden");
                }else if ( currentScrollPos<prevScrollPos ){
                    $("#navbar").removeClass("hidden");
                }
                prevScrollPos=currentScrollPos;

            });
        });
    }(jQuery));


});
