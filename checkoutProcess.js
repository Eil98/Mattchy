$(document).ready(function () {

    generateShoppingCart();

    $(".closeBtn").click(function () {
        $("#adressesOverlay").css("display", "none");
        $("#overlayCards").css("display", "none")
        $("body").removeClass("noscroll");
    });

    $(".openBtnAdresses").click(function () {
        overlayProcess();
        $("#adressesOverlay").css("display", "block");
        $("body").addClass("noscroll");
    });
    $(".openBtnCards").click(function () {
        overlayProcess();
        $("#overlayCards").css("display", "block");
        $("body").addClass("noscroll");
    });

    $("#newadress").click(function () {
        $(location).attr('href','addShipping.html');
    });

    $("#newcard").click(function () {
        $(location).attr('href','addCard.html');
    });

    //Shopping-cart Content
    shoppingcartSummaryze();
function generateShoppingCart() {
    var data=localStorage.getItem(localStorage.getItem("access"));
    data=JSON.parse(data);
    console.log(data);
    var length=data.shopping_cart.length;

    for(var i=0;i<length;i++){

        if(data.shopping_cart[i]!=null ) {
            var cardObj = "" +
                "<div class=\"card-group\" >\n" +
                "        <div class=\"card \">\n" +
                "            <div class=\"row no-gutters mb-0\">\n" +
                "                <img src=\"" + data.shopping_cart[i].image + "\" class=\"card-img\">\n" +
                "                    <div class=\"card-body\">\n" +
                "                        <h6 class=\"card-title object-brand\">" + data.shopping_cart[i].brand + "-" + "\n" +
                "                            <small class=\"object-name\">" + data.shopping_cart[i].name + "</small>\n" +
                "                        </h6>\n" +
                "                        <p class=\"card-text float-right object-price\"> " + data.shopping_cart[i].price + "€" + "</p>\n" +
                "                        <p class=\"card-text object-size\">" + data.shopping_cart[i].selected_size + " </p>\n" +
                "\n" +
                "\n" +
                "                        <div class=\"input-group input-group-sm \">\n" +
                "                            <div class=\"input-group-prepend\">\n" +
                "                                <label class=\"input-group-text\" for=\"quantity\">Quantity</label>\n" +
                "                            </div>\n" +
                "\n" +
                "                            <select class=\"custom-select-sm cart-select\" id=\"" + i + "\">\n" +
                "                                <option value=\"0\">(0)Remove</option>\n" +
                "                                <option selected value=\"1\">1</option>\n" +
                "                                <option value=\"2\">2</option>\n" +
                "                                <option value=\"3\">3</option>\n" +
                "                                <option value=\"4\">4</option>\n" +
                "                            </select>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>" + "\n";
            console.log(cardObj);
            $(".shopcart-container").append(cardObj);
        }
        $(".cart-select").on('change',function () {
            var objId=$(this).attr("id");
            data.shopping_cart[objId].quantity=$(this).val();
            if (data.shopping_cart[objId].quantity==0) {
                console.log("ciao");
                delete data.shopping_cart[objId];
                console.log(data.shopping_cart);
                localStorage.setItem(localStorage.getItem("access"),JSON.stringify(data));
                $(".shopcart-container").empty();
                generateShoppingCart();
            }
            localStorage.setItem(localStorage.getItem("access"),JSON.stringify(data));
        });

    }
}

function overlayProcess() {
    var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
    var cardBox="";
    var adressBox="";

    var cardLength=usertmp.cards.length;
    var adressLength=usertmp.adresses.length;
    $(".adressesbox-container").empty();
    $(".cardsbox-container").empty();

    for(var i=0;i<cardLength;i++){
         cardBox="" +
            "<div class=\"inputGroup\">\n" +
            "<input id=\"cards"+i+"\" name=\"cards\" value=\""+i+"\" type=\"radio\"/>\n" +
            "<label for=\"cards"+i+"\">" +
            "   <div>"+ usertmp.cards[i].first_name+"  "+ usertmp.cards[i].last_name +"</div>" +
            "   <div>"+ usertmp.cards[i].card_number+"</div>" +
            "   <div>"+ usertmp.cards[i].exp_month+" / "+ usertmp.cards[i].exp_year +"</div>" +
            "</label>\n" +
            "</div>";

        $(".cardsbox-container").append(cardBox);
    }
    for(var j=0;j<adressLength;j++){
        adressBox= "" +
            "<div class=\"inputGroup\">\n" +
            "<input id=\"adresses"+j+"\" name=\"adresses\" value=\""+j+"\" type=\"radio\"/>\n" +
            "<label for=\"adresses"+j+"\">\n" +
            "   <div>"+ usertmp.adresses[j].first_name+"  "+ usertmp.adresses[j].last_name +"</div>\n" +
            "   <div>"+ usertmp.adresses[j].adress+"  "+ usertmp.adresses[j].city +"  ("+ usertmp.adresses[j].district +")</div>\n" +
            "   <div>"+usertmp.adresses[j].nation+"</div>\n" +
            "   <div>"+usertmp.adresses[j].telefono+"</div>\n" +
            "</label>\n" +
            "</div>";

        $(".adressesbox-container").append(adressBox);

    }
    $('.overlayCards-content').on("submit",function () {
        event.preventDefault();
        var formOut = $(this).serializeArray();
        console.log(formOut,formOut.length);
        var selected=parseInt(formOut[0].value);
        usertmp.cards[selected].selected="1";
        console.log("selected"+selected);
        $("#selectedCALabel").empty();

        for(var i=0;i<cardLength;i++){
            if(i!=selected) {
                usertmp.cards[i].selected = "0";
            }else {
                $("#selectedCALabel").append("<div>"+ usertmp.cards[i].first_name+"  "+ usertmp.cards[i].last_name +"</div>\n" +
                    "   <div>"+ usertmp.cards[i].card_number+"</div>\n" +
                    "   <div>"+ usertmp.cards[i].exp_month+" / "+ usertmp.cards[i].exp_year +"</div>\n" );
                $("#selectedCA").attr("value",""+i+"");
                console.log("ciaoacards");
            }
        }
        $("#overlayCards").css("display", "none");
        $("#selectedCA").attr("checked","true");
        $("body").removeClass("noscroll");
        localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));
    });



    $('.overlayAdress-content').on("submit",function () {
        event.preventDefault();
        var formOut = $(this).serializeArray();
        console.log(formOut,formOut.length);
        var selected=parseInt(formOut[0].value);
        usertmp.adresses[selected].selected="1";
        $("#selectedSALabel").empty();

        for(var j=0;j<adressLength;j++){
            if(j!=selected) {
                usertmp.adresses[j].selected = "0";
            }else {
                $("#selectedSALabel").append("<div>"+ usertmp.adresses[j].first_name+"  "+ usertmp.adresses[j].last_name +"</div>\n" +
                    "   <div>"+ usertmp.adresses[j].adress+"  "+ usertmp.adresses[j].city +"("+ usertmp.adresses[j].district +")</div>\n" +
                    "   <div>"+usertmp.adresses[j].nation+"</div>\n" +
                    "   <div>"+usertmp.adresses[j].telefono+"</div>\n" );
                console.log("ciaoadress");
                $("#selectedSA").attr("value",""+j+"");
            }
        }
        $("#adressesOverlay").css("display", "none");
        $("#selectedSA").attr("checked","true");
        console.log("ciaoadress22");
        $("body").removeClass("noscroll");
        localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));

    });
}
function shoppingcartSummaryze() {
    var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
    var cardLength=usertmp.cards.length;
    var adressLength=usertmp.adresses.length;

    for(var i=0;i<cardLength;i++) {
        if (usertmp.cards[i].selected == "1") {
            $("#selectedCALabel").append("<div>" + usertmp.cards[i].first_name + "  " + usertmp.cards[i].last_name + "</div>\n" +
                "   <div>" + usertmp.cards[i].card_number + "</div>\n" +
                "   <div>" + usertmp.cards[i].exp_month + " / " + usertmp.cards[i].exp_year + "</div>\n");
            $("#selectedCA").attr("value", "" + i + "");
            $("#selectedCA").attr("checked","true");
        }
    }

    for(var j=0;j<adressLength;j++) {
        if (usertmp.adresses[j].selected == "1") {
            $("#selectedSALabel").append("<div>" + usertmp.adresses[j].first_name + "  " + usertmp.adresses[j].last_name + "</div>\n" +
                "   <div>" + usertmp.adresses[j].adress + "  " + usertmp.adresses[j].city + "(" + usertmp.adresses[j].district + ")</div>\n" +
                "   <div>" + usertmp.adresses[j].nation + "</div>\n" +
                "   <div>" + usertmp.adresses[j].telefono + "</div>\n");
            $("#selectedSA").attr("value", "" +j+ "");
            $("#selectedSA").attr("checked","true");
        }
    }
}
});