$(document).ready(function () {
    //riempimento della parte grafica dello shopping cart
    function generateShoppingCart() {
        var data=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
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


                $(".shopcart-container").append(cardObj);
                $("#"+""+i+"").val(data.shopping_cart[i].quantity);
                shoppingcartSummaryze();
            }
        }
    }

    var shipFees=0;
    var total=0;
    shoppingTotal();
    console.log("total ini:   "+total);

//Calcolo totale carrello
    function objectsTotal() {
        var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        var totProducts=0;
        console.log("Shop length:  "+ usertmp.shopping_cart.length);
        for (var x=0;x<usertmp.shopping_cart.length;x++) {
            if(usertmp.shopping_cart[x]!=null)
                totProducts=totProducts +(parseInt(usertmp.shopping_cart[x].price) * parseInt(usertmp.shopping_cart[x].quantity));
        }
        return totProducts;
    }

    //Calcolo totale carrello con spedizione
    function shoppingTotal() {
        var tmpTotal=objectsTotal();
        if(tmpTotal <50) {
            total = tmpTotal + shipFees;
        }
        else {
            total = tmpTotal;
        }
        console.log("total it:   "+total);

        priceUpdate();
        console.log("total it2:   "+total);
    }

    //Aggiornamento grafico prezzi sommario
    function priceUpdate() {
        if (total>=50){
            $(".shippingFees").html("Free");
        }
        $(".totProduct").html(""+ objectsTotal()+"€");
        $(".tot").html(""+ total+"€");
    }

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
//Controlli sconto e selezione spedizione

    $("#Codsconto").on("keyup" ,function () {
        $("#message2").html('Discount applied').css('color', 'green');
    });


    $("#message").html('Select a shipping method').css('color', 'red');
    $("#radio6").on("click", function () {
        $("#message").css('display', 'none');
        if (total < 50) {
             shipFees = 5;
            $(".shippingFees").html("" + shipFees + "€");
            shoppingTotal();
        }
        else {
            $(".shippingFees").html("Free");
        }
    });

    $("#radio5").on("click", function () {
        $("#message").css('display', 'none');
        $(".shippingFees").html("Free");
    });



    //Modifica quantità
    $(".cart-select").on('change',function () {
        var data=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        var objId=$(this).attr("id");
        var objs=JSON.parse(localStorage.getItem("objects"));

        if ( data.shopping_cart[objId] != null) {

            if ($(this).val()==0) {
                    data.shopping_cart[objId]=null;
                localStorage.setItem(localStorage.getItem("access"),JSON.stringify(data));
                $(".shopcart-container").empty();
                generateShoppingCart();
                shoppingTotal();
            }
            for (var i = 0; i < objs.length; i++) {
                if (data.shopping_cart[objId] != null) {
                    if (objs[i].name == data.shopping_cart[objId].name) {
                        if (parseInt(objs[i].wardrobe[mappingSize(data.shopping_cart[objId].selected_size)].number) < $(this).val()) {
                            blurt({
                                title: 'Error',


                                text: 'Not enough objects,select a different quantity',

                                /*
                               * alert type
                               * success, error, warning, info
                               * default is 'default'
                               */
                                type: 'error',

                                okButtonText: 'Ok',

                                escapable: true
                            });

                            break;
                        } else {
                            data.shopping_cart[objId].quantity = $(this).val();
                            $("#" + "" + i + "").val(data.shopping_cart[objId].quantity);
                            localStorage.setItem(localStorage.getItem("access"), JSON.stringify(data));
                            shoppingTotal();
                            break;
                        }
                    }
                }
            }
        }
    });

    //Funzione che toglie gli oggetti dal DB al momento dell' acquisto
    function ModifyQuantityObjects(name,size,qta) {
        var objs=JSON.parse(localStorage.getItem("objects"));
        var name=name;
        var size=size;
        var qta=qta;

        for(var i=0;i<objs.length;i++){
            if(objs[i].name==name){
                console.log("prima;;"+objs[i].wardrobe[mappingSize(size)].number);
                objs[i].wardrobe[mappingSize(size)].number=objs[i].wardrobe[mappingSize(size)].number-qta;
                console.log("dopo;;"+objs[i].wardrobe[mappingSize(size)].number);
                break;
            }
        }
        localStorage.setItem("objects",JSON.stringify(objs));
    }

//Gestione Pressione purchase the order
    $('.shop-form').on("submit", function () {
        event.preventDefault();
        var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        var scLength=usertmp.shopping_cart.length;
        var formOut = $(this).serializeArray();

        if (formOut[3].value != "") {                                                //Insert Discount code
            if (formOut[3].value == "10"){
                total = total - ((total * 10) / 100);
            }
        }
                                                                                    //riempimento ordine
        var thisadress = formOut[0].value;
        var thiscard = formOut[1].value;
        var exp_date = Date.now() + 86400000;
        var index = 0;
        if (usertmp.orders == undefined) {
            usertmp = {
                ...usertmp,
                orders: [{
                    tot: "" + total + "",
                    date: "" + exp_date + "",
                    status: "1",
                    adress: "" + thisadress + "",
                    card: "" + thiscard + "",
                    content: []
                }]
            };
            for (var y = 0; y < scLength; y++) {
                if (usertmp.shopping_cart[y] != null) {
                    usertmp.orders[0].content[index] = {
                        name: ""+ usertmp.shopping_cart[y].name+"",
                        price: ""+ usertmp.shopping_cart[y].price+"",
                        quantity: ""+ usertmp.shopping_cart[y].quantity+"",
                        selected_size: ""+ usertmp.shopping_cart[y].selected_size+""
                    };
                    index++;
                }
            }
        }else {
            var orLenght=usertmp.orders.length;
            usertmp.orders[orLenght]={
                tot: "" + total + "",
                date: "" + exp_date + "",
                status: "1",
                adress: "" + thisadress + "",
                card: "" + thiscard + "",
                content: []
            };
            for (var y = 0; y < scLength; y++) {
                if (usertmp.shopping_cart[y] != null) {
                    usertmp.orders[orLenght].content[index] = {
                        name: ""+ usertmp.shopping_cart[y].name+"",
                        price: ""+ usertmp.shopping_cart[y].price+"",
                        quantity: ""+ usertmp.shopping_cart[y].quantity+"",
                        selected_size: ""+ usertmp.shopping_cart[y].selected_size+""
                    };
                    index++;
                }
            }
        }
                                                                                        //svuota carrello
        for (var i=0;i<usertmp.shopping_cart.length;i++){
            if(usertmp.shopping_cart[i]!=null){
                var size=usertmp.shopping_cart[i].selected_size;
                var name=usertmp.shopping_cart[i].name;
                var qta=usertmp.shopping_cart[i].quantity;
                ModifyQuantityObjects(name,size,qta);
                console.log("uscito dallla delete"+i);
                usertmp.shopping_cart[i]=null;
            }
        }

        localStorage.setItem(localStorage.getItem("access"), JSON.stringify(usertmp));
        $(location).attr('href', 'order.html');
    });

    function mappingSize(size) {
        switch (size) {
            case "S":
                pos=0;
                break;
            case "M":
                pos=1;
                break;
            case "L":
                pos=2;
                break;
            case "XL":
                pos=3;
                break;
            case "40.5":
                pos=0;
                break;
            case "41":
                pos=1;
                break;
            case "41.5":
                pos=2;
                break;
            case "42":
                pos=3;
                break;
            case "42.5":
                pos=4;
                break;
            case "43":
                pos=5;
                break;
            case "43.5":
                pos=6;
                break;
            case "44":
                pos=7;
                break;
            case "44.5":
                pos=8;
                break;
            case "45":
                pos=9;
                break;
            case "46":
                pos=10;
                break;
            case "U":
                pos=0;
                break;
        }
        return pos;
    }

    //Funzione che aggiorna il sommario del carrello
    function shoppingcartSummaryze() {
        var usertmp = JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        if(usertmp.cards!=undefined && usertmp.adresses!=undefined) {
            var cardLength = usertmp.cards.length;
            var adressLength = usertmp.adresses.length;

            for (var i = 0; i < cardLength; i++) {
                if (usertmp.cards[i].selected == "1") {
                    $("#selectedCALabel").empty();
                    $("#selectedCALabel").append("<div>" + usertmp.cards[i].first_name + "  " + usertmp.cards[i].last_name + "</div>\n" +
                        "   <div>" + usertmp.cards[i].card_number + "</div>\n" +
                        "   <div>" + usertmp.cards[i].exp_month + " / " + usertmp.cards[i].exp_year + "</div>\n");
                    $("#selectedCA").attr("value", "" + i + "");
                    $("#selectedCA").attr("checked", "true");
                }
            }
            for (var j = 0; j < adressLength; j++) {
                if (usertmp.adresses[j].selected == "1") {
                    $("#selectedSALabel").empty();
                    $("#selectedSALabel").append("<div>" + usertmp.adresses[j].first_name + "  " + usertmp.adresses[j].last_name + "</div>\n" +
                        "   <div>" + usertmp.adresses[j].adress + "  " + usertmp.adresses[j].city + "(" + usertmp.adresses[j].district + ")</div>\n" +
                        "   <div>" + usertmp.adresses[j].nation + "</div>\n" +
                        "   <div>" + usertmp.adresses[j].telefono + "</div>\n");
                    $("#selectedSA").attr("value", "" + j + "");
                    $("#selectedSA").attr("checked", "true");
                }
            }
        }
    }

    //Gestione processi degli Overlay
    function overlayProcess() {
    var usertmp=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
    var cardBox="";
    var adressBox="";
    if(usertmp.cards== undefined){
        $(location).attr('href', 'addCard.html')
    }
    if(usertmp.adresses== undefined){
        $(location).attr('href', 'addShipping.html')
    }

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
        $("#selectedCALabel").empty();

        for(var i=0;i<cardLength;i++){
            if(i!=selected) {
                usertmp.cards[i].selected = "0";
            }else {
                $("#selectedCALabel").append("<div>"+ usertmp.cards[i].first_name+"  "+ usertmp.cards[i].last_name +"</div>\n" +
                    "   <div>"+ usertmp.cards[i].card_number+"</div>\n" +
                    "   <div>"+ usertmp.cards[i].exp_month+" / "+ usertmp.cards[i].exp_year +"</div>\n" );
                $("#selectedCA").attr("value",""+i+"");

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
                $("#selectedSA").attr("value",""+j+"");
            }
        }
        $("#adressesOverlay").css("display", "none");
        $("#selectedSA").attr("checked","true");
        $("body").removeClass("noscroll");
        localStorage.setItem(localStorage.getItem("access"),JSON.stringify(usertmp));

    });
    }

});