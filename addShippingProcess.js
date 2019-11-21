$(document).ready(function () {
    $('.contact-form').on("submit",function () {
        event.preventDefault();
        var formOut = $(this).serializeArray();
        console.log(formOut,formOut.length);
        var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        if(usertmp.adresses===undefined){
            usertmp={...usertmp,adresses:[{
                    first_name:""+ formOut[0].value+"",
                    last_name:""+ formOut[1].value+"",
                    nation:""+ formOut[2].value+"",
                    adress:""+ formOut[3].value+"",
                    cap:""+ formOut[4].value+"",
                    city:""+ formOut[5].value+"",
                    district:""+ formOut[6].value+"",
                    telefono:""+ formOut[7].value+"",
                    selected:""+ formOut[8].value+""}]};
            localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));
            $(location).attr('href','shoppingCart.html');
        }else {
            const scLength=usertmp.adresses.length;
            for(var i=0;i<scLength;i++) {
                usertmp.adresses[i].selected="0";
            }
            console.log(scLength);
            usertmp.adresses[scLength]={
                first_name:""+ formOut[0].value+"",
                last_name:""+ formOut[1].value+"",
                nation:""+ formOut[2].value+"",
                adress:""+ formOut[3].value+"",
                cap:""+ formOut[4].value+"",
                city:""+ formOut[5].value+"",
                district:""+ formOut[6].value+"",
                telefono:""+ formOut[7].value+"",
                selected:""+ formOut[8].value+""};
            localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));
        $(location).attr('href','shoppingCart.html');
        }

    });
});