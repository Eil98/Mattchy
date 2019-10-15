const cardGroupCount = 3;
const cardItem = "\n" +
    "<div class=\"card\">\n" +
    "    <img src=\"img.jpg\" class=\"card-img-top\" alt=\"\"/><!-- inserire description in alt-->\n" +
    "    <div class=\"card-body\">\n" +
    "        <button class=\"btn btn-link heart\"><i class=\"far fa-heart \"></i></button>\n" +
    "        <h5 class=\"card-title\">Card title</h5>\n" +
    "        <small class=\"brand-name\">Brand name</small>\n" +
    "        <div class=\"prezzo-container\">\n" +
    "            <p class=\"card-text prezzo-card\">55.00€</p>\n" +
    "            <p class=\"card-text\">Select your size</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <select class=\"custom-select size-card\">\n" +
    "            <option value=\"S\">S</option>\n" +
    "            <option value=\"M\">M</option>\n" +
    "            <option value=\"L\">L</option>\n" +
    "            <option value=\"XL\">XL</option>\n" +
    "        </select>\n" +
    "        <div class=\"disponibilit-container\">\n" +
    "            <p class=\"avaibility-card\">Available</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"add-container\">\n" +
    "            <button class=\"btn btn-primary\" >Add to cart</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"; //TODO mettere direttamente dentro la funzione senza fare il replace

$(document).ready(function () {
    var data=localStorage.getItem("object");

    $.getJSON("data.json", function(json) { //Loading local json file
        populateCardContainer(json.objects);
    });





    function populateCardContainer(data){
        var length = Object.keys(data).length; //TODO fa schifo, trova qualcosa di meglio

        var threeCount = parseInt(length / cardGroupCount);

        var extraCount = length - (threeCount * cardGroupCount);

        // var i = 0;
        var i = 0;
        // var card1 = generateCard(data.objects[i].image);
        console.log("EXTRA:  " + extraCount);

        for (k = 0; k < threeCount; k++){
            var card1 = generateCard(data[i].image); i++;
            var card2 = generateCard(data[i].image); i++;
            var card3 = generateCard(data[i].image); i++;

            $("#card_container").append("<div class='card-group'>" + card1 + card2 + card3 + "</div>"); //Mi vergogno di aver scritto una cosa del genere, FAI MEGLIO!
        }

        if (extraCount > 0){ //TODO mettere insieme al for sopra, io non ho voglia ;)
            var card1 = (i < length) ? generateCard(data[i].image) : ""; i++;
            var card2 = (i < length) ? generateCard(data[i].image) : ""; i++;
            var card3 = (i < length) ? generateCard(data[i].image) : ""; i++;

            $("#card_container").append("<div class='card-group'>" + card1 + card2 + card3 + "</div>"); //Mi vergogno di aver scritto una cosa del genere, FAI MEGLIO!

        }

    }

    function setImage(card, image){

    }

    function generateCard(img){
        return cardItem.replace("img.jpg", img);
    }
    var obj=JSON.parse(data);
    //
    // for(var i=0;i<$(obj.objects).length;i++) {
    //     var card="inserire le card che sono in main finale.html ,ogni 3 card apro un div con class card-group,i campi nelle card sono quelli che dovro inserire con JS " +
    //         "il fale jsonObjectCompiled contiene il file jsopn con tutti gli oggetti,per caricarlo apri il sito nel browse" +
    //         "r,tasto destro->Ispeziona ->Application ->Local Storage->In una riga inserisci objects come key e come value la stringa di JSON" +
    //         "grazie al metodo localStorage.getitem prendo tutto il file" +
    //         "voglio che in automatico si creino le card in main finale con i campi riempiti con i valori degli oggetti nel file Json," +
    //         "Il problema come dicevi tu è che devo assegnare un id ad ogni card automaticamente" +
    //         "e devo compilarla automaticamente con l'ogetto successivo in json in modo che non assegni a tutte le card gli stessi valori";
    //     console.log(card);
    //
    //
    // }

});