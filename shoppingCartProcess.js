$(document).ready(function () {
    $('#shopCartTrigg').click(function () {
        if(localStorage.getItem('access')==null){
            $("#loginOverlay").css("display","block");
        }
        
    });
});