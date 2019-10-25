$(document).ready(function () {
        const cardGroupCount = 3;
    const avYes= "            <span class=\"avaibility-card badge badge-success\">Available</span>\n";
    const avNot="             <span class=\"avaibility-card badge badge-danger\">Not Available</span>\n";

        $.getJSON("data.json", function(json) { //Loading local json file
            populateCardContainer(json.objects);
            checkAddtoCart(json.objects);
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
        function populateCardContainer(data){
            var length = Object.keys(data).length;
            var threeCount = parseInt(length / cardGroupCount);
            var extraCount = parseInt(length - (threeCount * cardGroupCount));
            var i = 0;
            console.log("EXTRA:  " + extraCount);

            for (k = 0; k < threeCount; k++){
                var card1 = generateCard(data[i].image,data[i].name,data[i].brand,data[i].price,data[i].description,data[i].availability,data[i].wardrobe,data[i].category,i); i++;
                var card2 = generateCard(data[i].image,data[i].name,data[i].brand,data[i].price,data[i].description,data[i].availability,data[i].wardrobe,data[i].category,i); i++;
                var card3 = generateCard(data[i].image,data[i].name,data[i].brand,data[i].price,data[i].description,data[i].availability,data[i].wardrobe,data[i].category,i); i++;

                $(".card-container").append("<div class='card-deck'>" + card1 + card2 + card3 + "</div>");

            }
            if(extraCount > 0) {
                if (extraCount==1) {
                    var card1 = (i < length) ? generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description,data[i].availability,data[i].wardrobe,data[i].category,i) : ""; i++;
                    var card2 = ""; i++;
                    var card3 = ""; i++;

                    $(".card-container").append("<div class='card-deck'>" + card1 + card2 + card3 + "</div>");
                }
                else {

                    var card1 = (i < length) ? generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description,data[i].availability,data[i].wardrobe,data[i].category,i) : "";i++;
                    var card2 = (i < length) ? generateCard(data[i].image, data[i].name, data[i].brand, data[i].price, data[i].description,data[i].availability,data[i].wardrobe,data[i].category,i) : "";i++;
                    var card3 = ""; i++;
                    $(".card-container").append("<div class='card-deck'>" + card1 + card2 + card3 + "</div>");

                }
            }
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
                //gestire la quintita per dire se e oresente la taglia scelta
            }


            cardItem="\n" +
                "<div class=\"card\">\n" +
                "    <img src=\"" +img + "\" class=\"card-img-top\" alt=\""+des+"\"/>\n" +
                "    <div class=\"card-body\">\n" +
                "        <button class=\"btn btn-link heart\"><i class=\"far fa-heart \"></i></button>\n" +
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
            console.log(formId,size);


            if(size!="notAv" && data[formId].wardrobe[mappingSize(size)].number != 0){
                if((localStorage.getItem("access"))!="null"){
                    var user= JSON.parse(localStorage.getItem(localStorage.getItem("access")));
                    /*var product={
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
                };*/
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
                    if(user.shopping_cart ==undefined) {

                        window.alert(" Succesfully added to the cart!tipo0");
                        localStorage.setItem("" + user.email + "",JSON.stringify(newUser));
                        console.log(newUser);
                    }else {
                        const scLength=user.shopping_cart.length;

                        user.shopping_cart[scLength]={
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
                            localStorage.setItem("" + user.email + "",JSON.stringify(user));
                            window.alert(" Succesfully added to the cart!tipo2");

                    }
                }else {
                    window.alert(" Please Log In or Sign In for continue to shopping!");
                }
            }else{
                window.alert(
                   " Size not available select an other size"
                );
            }
        });
         }
         //TODO: Ottobre
    //TODO:gestione aggiunta al carrello: devo passare gli attributi che mi servono o l'oggetto intero dopo aver fatto i controlli di disponibilità e passarlo all'oggetto carrello,gestione analoga per la wishlist.
    //TODO:gestione filtraggi vari
    //TODO:gestione acquisto simulato
    //TODO;gestione aggiunta indirizzi e carte

        //TODO:  Novembre
    // TODO: finire pagina web BRand coin annessa gestione delle recensioni che vanno abbinate al brand
    //TODO:gestione ricerca per nome
    //TODO:gestione barra di navigazione
    //TODO:Rifinitura menu e footer ,uso di htaccess
    //TODO:Documento di analisi dei requisti con esempi e mini presentazione


});



