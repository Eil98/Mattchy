$(document).ready(function () {

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