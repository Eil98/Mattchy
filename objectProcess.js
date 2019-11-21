$(document).ready(function () {
    const cardGroupCount = 3;
    const avYes= "            <span class=\"avaibility-card badge badge-success\">Available</span>\n";
    const avNot="             <span class=\"avaibility-card badge badge-danger\">Not Available</span>\n";

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
    $("#reset").on("click",function () {
        $(location).attr('href','mainFinale.html');
    });
       // $.getJSON("data.json", function(json) {
            //Loading local json file
            //localStorage.setItem("objects",JSON.stringify(json));//commentare per rendere consistente lagestione della quantità
            var dataInit=(JSON.parse(localStorage.getItem("objects")));
            populateCardContainer(dataInit);
            filterCard();
       // });


        function filterCard() {

            $(".searchForm").on("submit",function () {
                event.preventDefault();
                var data=(JSON.parse(localStorage.getItem("objects")));
                var formOut = $(this).serializeArray();
                for (var i=0;i<data.length;i++){
                    if (data[i].name!=formOut[0].value && data[i].category!=formOut[0].value && data[i].brand!=formOut[0].value){
                        data[i]=undefined;
                    }
                }
                populateCardContainer(data);
                $("#searchOverlay").css("display","none");
            });

            $(".Mcategoryfilter").on("click",function () {
                var data=(JSON.parse(localStorage.getItem("objects")));
                var id=$(this).attr("id").substring(1);
                for (var i=0;i<data.length;i++){
                    if (data[i].category!=id){
                        data[i]=undefined;
                    }
                }
                populateCardContainer(data);
            });

            $(".categoryfilter").on("click",function () {
                var data=(JSON.parse(localStorage.getItem("objects")));


               for (var i=0;i<data.length;i++){
                    if (data[i].category!=$(this).attr("id")){
                        data[i]=undefined;
                    }
                }
               populateCardContainer(data);
            });

            $(".genderfilter").on("click",function () {
                var data=(JSON.parse(localStorage.getItem("objects")));
                for (var i=0;i<data.length;i++){
                    var val=$(this).attr("id");
                    if (val=="Ma")val="M";
                    if (data[i].gender!=val){
                        data[i]=undefined;
                    }
                }
                populateCardContainer(data);
            });
            $(".brandfilter").on("click",function () {
                var data=(JSON.parse(localStorage.getItem("objects")));

                for (var i=0;i<data.length;i++){
                    if (data[i].brand!=$(this).attr("id")){
                        data[i]=undefined;
                    }
                }
                populateCardContainer(data);
            });
            $(".sizesfilter").on("click",function () {
                var data=JSON.parse(localStorage.getItem("objects"));
                console.log("IdSize"+$(this).attr("id"));

                for (var i=0;i<data.length;i++) {
                    if (data[i].wardrobe[mappingSize($(this).attr("id"))] != undefined) {
                        console.log("ward"+i+"       "+data[i].wardrobe[mappingSize($(this).attr("id"))].number);

                        if (parseInt(data[i].wardrobe[mappingSize($(this).attr("id"))].number) == 0) {
                            data[i] = undefined;
                        }
                    }
                }
                populateCardContainer(data);
            });
            $(".pricefilter").on("click",function () {
                var data=(JSON.parse(localStorage.getItem("objects")));

                for (var i=0;i<data.length;i++){

                    if (parseInt(data[i].price) > parseInt($(this).attr("id"))){
                        data[i]=undefined;
                    }
                }
                populateCardContainer(data);
            });
        }

        function undefinedCount(data) {
            var undfObj=0;

            for (var i=0;i<Object.keys(data).length;i++) {
                if(data[i] == undefined){
                    undfObj++;
                }
            }
            return undfObj;
        }


        function populateCardContainer(data) {
            $(".card-container").empty();
            var length = data.length;
            var undfObj=undefinedCount(data);
            var i = 0;
            var nullCount = 0;
            var threeCount = parseInt((length - undfObj) / cardGroupCount);
            var extraCount = parseInt((length -undfObj) - (threeCount * cardGroupCount));
            console.log("EXTRA:  " + extraCount);
            console.log("TOT/3:  " + threeCount);

            for (var k = 0; k < threeCount; k++) {

                while (data[i] == undefined && i < length) {
                    nullCount++;
                    i++;
                }
                var card1 = generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description, data[i].availability, data[i].wardrobe, data[i].category, i );
                i++;

                while (data[i] == undefined && i < length) {
                    nullCount++;
                    i++;
                }
                var card2 = generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description, data[i].availability, data[i].wardrobe, data[i].category, i );
                i++;

                while (data[i] == undefined && i < length) {
                    nullCount++;
                    i++;
                }
                var card3 = generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description, data[i].availability, data[i].wardrobe, data[i].category, i);
                i++;

                $(".card-container").append("<div class='card-deck'>" + card1 + card2 + card3 + "</div>");
            }


            if (extraCount > 0) {
                if (extraCount == 1) {
                    while (data[i] == undefined && i < length) {
                        nullCount++;
                        i++;
                    }
                    card1 = (i < length) ? generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description, data[i].availability, data[i].wardrobe, data[i].category, i ) : "";
                    card2 = "";
                    card3 = "";

                    $(".card-container").append("<div class='card-deck'>" + card1 + card2 + card3 + "</div>");
                } else {
                    while (data[i] == undefined && i < length) {
                        nullCount++;
                        i++;
                    }
                    card1 = (i < length) ? generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description, data[i].availability, data[i].wardrobe, data[i].category, i ) : "";
                    i++;
                    while (data[i] == undefined && i < length) {
                        nullCount++;
                        i++;
                    }
                    card2 = (i < length) ? generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description, data[i].availability, data[i].wardrobe, data[i].category, i ) : "";
                    i++;
                    card3 = "";
                    $(".card-container").append("<div class='card-deck'>" + card1 + card2 + card3 + "</div>");
                }
            }
            checkAddtoCart(data);
        }

        function generateCard(img,name,brand,price,des,availability,wardrobe,category,indexObj){
            var selectShoes="\n" +
                "    <form class=\"size-form\" id=\""+indexObj+"\">\n"+
                "        <select  name=\"selectsize\" class=\"custom-select size-card\">\n" +
                "            <option value=\"40.5\">40.5</option>\n" +
                "            <option value=\"41\">41</option>\n" +
                "            <option value=\"41.5\">41.5</option>\n" +
                "            <option value=\"42\">42</option>\n" +
                "            <option value=\"42.5\">42.5</option>\n" +
                "            <option value=\"43\">43</option>\n" +
                "            <option value=\"43.5\">43.5</option>\n" +
                "            <option value=\"44\">44</option>\n" +
                "            <option value=\"44.5\">44.5</option>\n" +
                "            <option value=\"45\">45</option>\n" +
                "            <option value=\"46\">46</option>\n" +
                "        </select>\n";

            var selectStandard="\n" +
                "    <form method=\'post\' class=\"size-form\" id=\""+indexObj+"\">\n"+
                "        <select  name=\"selectsize\" class=\"custom-select size-card\" >\n" +
                "            <option value=\"S\">S</option>\n" +
                "            <option value=\"M\">M</option>\n" +
                "            <option value=\"L\">L</option>\n" +
                "            <option value=\"XL\">XL</option>\n" +
                "        </select>\n";

            var selectAcc="\n" +
                "    <form class=\"size-form\" id=\""+indexObj+"\">\n"+
                "        <select  name=\"selectsize\" class=\"custom-select size-card\">\n" +
                "            <option value=\"U\">Standard</option>\n" +
                "        </select>\n";

            var selectNot="\n" +
                "    <form class=\"size-form\" id=\""+indexObj+"\">\n"+
                "        <select  name=\"selectsize\" class=\"custom-select size-card\"  >\n" +
                "            <option value=\"notAv\">It'll be soon available</option>\n" +
                "        </select>\n";
            
            var selectFinal=selectStandard;
            var avFinal=avYes;


                if(availability==0){
               avFinal=avNot;
               selectFinal=selectNot;
            }
            else {
                if(category=="shoes"){
                    selectFinal=selectShoes;
                }
                if(category=="accessories"){
                    selectFinal=selectAcc;
                }
            }


            cardItem="\n" +
                "<div class=\"card\">\n" +
                "    <img src=\"" +img + "\" class=\"card-img-top\" alt=\""+des+"\"/>\n" +
                "    <div class=\"card-body centertext\">\n" +
                "        <h6 class=\"card-title\">" +brand+ "</h6>\n" +
                "        <small class=\"brand-name\">" + name+ "</small>\n" +
                "        <div class=\"prezzo-container\">\n" +
                "            <h6 class=\"h6\">" +price +"€"+ "</h6>\n" +
                "            <p class=\"card-text\">Select your size</p>\n" +
                "        </div>\n" +

                                 selectFinal
                +
                "        <div class=\"disponibilit-container\">\n" +
                                    avFinal
                +
                "        </div>\n" +
                "\n" +
                "        <div class=\"add-container\">\n" +
                "            <button  type=/'submit/' class=\"btn btn-primary addToCart\" >Add to cart</button></form>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>\n" +
                "\n";
            return cardItem;
        }

        function checkAddtoCart(data){
            $('.size-form').on("submit",function () {
            event.preventDefault();
            var formOut=$(this).serializeArray();
            var formId=$(this).attr("id");
            var size=formOut[0].value;


            if(size!="notAv" && data[formId].wardrobe[mappingSize(size)].number > 0) {
                if ((localStorage.getItem("access")) != "null") {
                    var user = JSON.parse(localStorage.getItem(localStorage.getItem("access")));
                    var newUser = {
                        first_name: "" + user.first_name + "",
                        last_name: "" + user.last_name + "",
                        email: "" + user.email + "",
                        password: "" + user.password + "",
                        shopping_cart: [{
                            name: "" + data[formId].name + "",
                            category: "" + data[formId].category + "",
                            brand: "" + data[formId].brand + "",
                            gender: "" + data[formId].gender + "",
                            price: "" + data[formId].price + "",
                            availability: "" + data[formId].availability + "",
                            description: "" + data[formId].description + "",
                            image: "" + data[formId].image + "",
                            selected_size: "" + size + "",
                            quantity: "1"
                        }]
                    };
                    if (user.shopping_cart == undefined) {

                        blurt({
                            title: 'Success',


                            text: 'The item has been added to the cart',

                            /*
                           * alert type
                           * success, error, warning, info
                           * default is 'default'
                           */
                            type: 'success',

                            okButtonText: 'Ok',


                            escapable: true
                        });
                        localStorage.setItem("" + user.email + "", JSON.stringify(newUser));
                        console.log(newUser);
                    } else {
                        const scLength = user.shopping_cart.length;
                        user.shopping_cart[scLength] = {
                            name: "" + data[formId].name + "",
                            category: "" + data[formId].category + "",
                            brand: "" + data[formId].brand + "",
                            gender: "" + data[formId].gender + "",
                            price: "" + data[formId].price + "",
                            availability: "" + data[formId].availability + "",
                            description: "" + data[formId].description + "",
                            image: "" + data[formId].image + "",
                            selected_size: "" + size + "",
                            quantity: "1"
                        };
                        localStorage.setItem("" + user.email + "", JSON.stringify(user));
                        blurt({
                            title: 'Success',


                            text: 'The item has been added to the cart',

                            /*
                           * alert type
                           * success, error, warning, info
                           * default is 'default'
                           */
                            type: 'success',

                            okButtonText: 'Ok',


                            escapable: true
                        });

                    }
                }else {
                            blurt({
                                title: 'Warning',


                                text: 'Please Log In or Sign In for continue to shopping!',

                                /*
                               * alert type
                               * success, error, warning, info
                               * default is 'default'
                               */
                                type: 'warning',

                                okButtonText: 'Ok',


                                escapable: true
                            });
                        }

                } else {
                    blurt({
                        title: 'Warning',


                        text: ' Size not available select an other size',

                        /*
                       * alert type
                       * success, error, warning, info
                       * default is 'default'
                       */
                        type: 'warning',

                        okButtonText: 'Ok',

                        escapable: true
                    });


                }

        });
        }

        //TODO:  Novembre
    //TODO:controllare consistenza della quantita
    //TODO:Documento di analisi dei requisti con esempi e mini presentazione


});



