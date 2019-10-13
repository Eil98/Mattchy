$(document).ready(function () {
    var data=localStorage.getItem("object");
    var obj=JSON.parse(data);

    for(var i=0;i<$(obj.objects).length;i++) {
            var card="inserire le card che sono in main finale.html ,ogni 3 card apro un div con class card-group,i campi nelle card sono quelli che dovro inserire con JS " +
                "il fale jsonObjectCompiled contiene il file jsopn con tutti gli oggetti,per caricarlo apri il sito nel browse" +
                "r,tasto destro->Ispeziona ->Application ->Local Storage->In una riga inserisci objects come key e come value la stringa di JSON" +
                "grazie al metodo localStorage.getitem prendo tutto il file" +
                "voglio che in automatico si creino le card in main finale con i campi riempiti con i valori degli oggetti nel file Json," +
                "Il problema come dicevi tu è che devo assegnare un id ad ogni card automaticamente" +
                "e devo compilarla automaticamente con l'ogetto successivo in json in modo che non assegni a tutte le card gli stessi valori";
            console.log(card);


    }

});