$("#registrationtrigg").click(function() {
    var tmp=localStorage.getItem('countuser');
    var conta=parseInt(tmp);
    conta=conta+1;
    var key="user"+conta;

    var value=
        {"firstName": "Shravan Kumar",
        "lastName": "Kasagoni",
        "email": "25",
        "password": };

   localStorage.setItem(key,value);
});