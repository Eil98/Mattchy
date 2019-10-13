
$(document).ready(function () {

    $(".closeBtn").click(function () {
        $("#adressesOverlay").css("display", "none");
        $("body").removeClass("noscroll");
    });

    $(".openBtnAdresses").click(function () {
        $("#adressesOverlay").css("display", "block");
        $("body").addClass("noscroll");
    });

    $("#newadress").click(function () {
        $(location).attr('href','addShipping.html');
    });

    $("#newcard").click(function () {
        $(location).attr('href','addCard.html');
    });

    $(".openBtnCards").click(function () {
        console.log("evento1");
        $("#overlayCards").css("display", "block");
        console.log("evento");
        $("body").addClass("noscroll");
    });

    $(".closeBtn").click(function () {
        $("#overlayCards").css("display", "none");
        $("body").removeClass("noscroll");
    });



});