$(document).ready(function () {
    const Processing= "            <span class=\"avaibility-card badge badge-primary\">Processing</span>\n";
    const Shipped="             <span class=\"avaibility-card badge badge-success\">Shipped</span>\n";
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
    orderAdd();
    function orderAdd (){

        var data=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        var length=data.orders.length;
        $(".orders").empty();
        var objtot = "";
        var status = "";
        for (var i = 0; i < length; i++) {
            objtot="";
            if (data.orders[i] != null) {
                var date = Math.floor((data.orders[i].date - Date.now())/(1000*60));
                var h=Math.floor(date/60);
                var m=date % 60;

                if (date <= 0) {
                    data.orders[i].status = "2";
                    h=0;
                    m=0;

                }
                if (data.orders[i].status == 1) {
                    status = Processing;
                } else {
                    status = Shipped;

                }
                for (var j = 0; j < data.orders[i].content.length; j++) {
                    if (data.orders[i].content[j] != null) {
                        var obj = "<small >x" + data.orders[i].content[j].quantity + " " + data.orders[i].content[j].name + " " + data.orders[i].content[j].price + "€</small><br>\n";
                        objtot += obj;
                    }
                }

                var ordObj = "" +
                    "<div class=\"card-group\" >\n" +
                    "        <div class=\"card pad-bot border-dark\">\n" +
                    "            <div class=\"row no-gutters mb-0\">\n" +
                    "                    <div class=\"card-body\">\n" +
                    "                        <h5 class=\"card-title object-brand\">Order-" + i + "</h5>\n" +
                    "                          "+status +"  \n" +
                    "                            <small >Time before order submitting " + h + ":" + m + "</small>\n" +
                    "                        <i class=\"fa fa-trash float-right trash-red\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Delete the order\"id=\'" + i + "\' aria-hidden=\"true\"></i>\n" +
                    "                        <hr class=\'orderLine\'>\n" +
                    "                       <p class=\"card-text \"><h6>Shipping adress:</h6>\n" +
                    "                          <div>" + data.adresses[data.orders[i].adress].first_name + "  " + data.adresses[data.orders[i].adress].last_name + "</div>\n" +
                    "                          <div>" + data.adresses[data.orders[i].adress].adress + "  " + data.adresses[data.orders[i].adress].city + "  (" + data.adresses[data.orders[i].adress].district + ")</div>\n" +
                    "                          <div>" + data.adresses[data.orders[i].adress].nation + "</div>\n" +
                    "                          <div>" + data.adresses[data.orders[i].adress].telefono + "</div>\n" +
                    "                        </p>\n" +

                    "                       <hr class=\'orderLine\'><h6>Summary</h6>\n" +
                    "                      <p class=\"card-text float-right object-price\"> " + data.orders[i].tot + "€" + "</p>\n" +
                    "                                " + objtot + "     \n" +
                    "                   </div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "</div>";
                $(".orders").append(ordObj);
            }
        }
        localStorage.setItem("" + data.email + "",JSON.stringify(data))
    }
    $(".trash-red").click(function () {
        var data=JSON.parse(localStorage.getItem(localStorage.getItem("access")));
        if(data.orders[$(this).attr("id")].status ==1){
            var objs=JSON.parse(localStorage.getItem("objects"));
            for (var j = 0; j < data.orders[$(this).attr("id")].content.length; j++) {           //Gestione quantitá dopo evasione ordine
                for (var x = 0; x < objs.length; x++) {
                    if (data.orders[$(this).attr("id")].content[j].name == objs[x].name) {
                        console.log("obj qty   :"+objs[x].wardrobe[mappingSize(data.orders[$(this).attr("id")].content[j].selected_size)].number);
                        console.log("SH qty  :"+data.orders[$(this).attr("id")].content[j].quantity);
                        objs[x].wardrobe[mappingSize(data.orders[$(this).attr("id")].content[j].selected_size)].number = parseInt(objs[x].wardrobe[mappingSize(data.orders[$(this).attr("id")].content[j].selected_size)].number) + parseInt(data.orders[$(this).attr("id")].content[j].quantity);
                    }
                }
            }

            localStorage.setItem("objects",JSON.stringify(objs));
            data.orders[$(this).attr("id")]=null;
            localStorage.setItem("" + data.email + "",JSON.stringify(data));
            orderAdd();
            blurt({
                title: 'Info',


                text: 'Order deleted!',

                /*
               * alert type
               * success, error, warning, info
               * default is 'default'
               */
                type: 'info',

                okButtonText: 'Ok',

                escapable: true
            });
        }
    });

});