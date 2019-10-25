$(document).ready(function () {
    $('.contact-form').on("submit",function () {
        event.preventDefault();
        var formOut = $(this).serializeArray();
        console.log(formOut,formOut.length);
        var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        if(usertmp.cards===undefined){
            usertmp={...usertmp,cards:[{
                    first_name:""+ formOut[0].value+"",
                    last_name:""+ formOut[1].value+"",
                    card_number:""+ formOut[2].value+"",
                    exp_month:""+ formOut[3].value+"",
                    exp_year:""+ formOut[4].value+"",
                    ccv:""+ formOut[5].value+"",
                    selected:""+ formOut[6].value+""}]};
            localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));
            $(location).attr('href','shoppingCart.html');
        }else {
            const scLength=usertmp.cards.length;
            console.log(scLength);
            usertmp.cards[scLength]={
                    first_name:""+ formOut[0].value+"",
                    last_name:""+ formOut[1].value+"",
                    card_number:""+ formOut[2].value+"",
                    exp_month:""+ formOut[3].value+"",
                    exp_year:""+ formOut[4].value+"",
                    ccv:""+ formOut[5].value+"",
                    selected:""+ formOut[6].value+""};
            localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));
            $(location).attr('href','shoppingCart.html');
        }

    });
});