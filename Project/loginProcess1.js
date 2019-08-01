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
            $('#normalmenu').toggleClass('hidden');
            $('#usermenu').toggleClass('hidden');

        }else {
            alert("Incorrect password or email");
            localStorage.setItem('access','null');
        }

    });

});