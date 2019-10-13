$(document).ready(function () {
    var data=localStorage.getItem("object");
    var obj=JSON.parse(data);

    for(var i=0;i<$(obj.objects).length;i++) {
            var card="   <div class=\"card-group\" >\n" +
                "\n" +
                "    <div class=\"card\" id=\"card-"+i+"\">\n" +
                "        <img src=\"prova.jpg\" class=\"card-img-top\" alt=\"...\">\n" +
                "        <div class=\"card-body\">\n" +
                "            <button class=\"btn btn-link heart\" style=\"float: right\"><i class=\"far fa-heart \"></i> </button>\n" +
                "            <h5 class=\"card-title\">Card title</h5>\n" +
                "            <small class=\"brand-name\">Brand name</small>\n" +
                "            <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n" +
                "            <label >Select a size</label><select class=\"custom-select-sm \" id=\"size\" >\n" +
                "            <option value=\"S\">S</option>\n" +
                "            <option value=\"M\">M</option>\n" +
                "            <option value=\"L\">L</option>\n" +
                "            <option value=\"XL\">XL</option>\n" +
                "        </select><br>\n" +
                "            <button class=\"btn btn-primary\" >Add to cart</button>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"card\">\n" +
                "        <img src=\"prova.jpg\" class=\"card-img-top\" alt=\"...\">\n" +
                "        <div class=\"card-body\">\n" +
                "            <button class=\"btn btn-link heart\" style=\"float: right\"><i class=\"far fa-heart \"></i> </button>\n" +
                "            <h5 class=\"card-title\">Card title</h5>\n" +
                "            <small class=\"brand-name\">Brand name</small>\n" +
                "            <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n" +
                "            <label >Select a size</label><select class=\"custom-select-sm \" id=\"size\" >\n" +
                "            <option value=\"S\">S</option>\n" +
                "            <option value=\"M\">M</option>\n" +
                "            <option value=\"L\">L</option>\n" +
                "            <option value=\"XL\">XL</option>\n" +
                "        </select><br>\n" +
                "            <button class=\"btn btn-primary\" >Add to cart</button>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"card\">\n" +
                "        <img src=\"prova.jpg\" class=\"card-img-top\" alt=\"...\">\n" +
                "        <div class=\"card-body\">\n" +
                "            <button class=\"btn btn-link heart\" style=\"float: right\"><i class=\"far fa-heart \"></i> </button>\n" +
                "            <h5 class=\"card-title\">Card title</h5>\n" +
                "            <small class=\"brand-name\">Brand name</small>\n" +
                "            <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n" +
                "            <label >Select a size</label><select class=\"custom-select-sm \" id=\"size\" >\n" +
                "            <option value=\"S\">S</option>\n" +
                "            <option value=\"M\">M</option>\n" +
                "            <option value=\"L\">L</option>\n" +
                "            <option value=\"XL\">XL</option>\n" +
                "        </select><br>\n" +
                "            <button class=\"btn btn-primary\" >Add to cart</button>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>";
            console.log(card);


    }

});