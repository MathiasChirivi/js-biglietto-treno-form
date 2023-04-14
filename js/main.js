
//let bigliettoCostKm = 0.21;
//let NomeCognome = document.getElementById("NomePasseggero");
//let ButtonGenera = document.getElementById("genresButton");
//let Offerta = document.querySelector("offertaRicevuta");
//let Carrozza = document.querySelector("CarrozzaRisiedente");
//let codiceCp = document.querySelector("CodiceRicevuto");
//let CostoTicket = document.querySelector("PrezzoBiglietto");

//
genresButton.addEventListener(`click`,
    function(){
        var NomeCognome = document.getElementById("NomePasseggero");
        var NomePasseggeroCognome = NomeCognome.value;
        console.log(NomePasseggeroCognome);

       

        document.getElementById('CodiceRicevuto').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.getElementById('CarrozzaRisiedente').innerHTML = Math.floor(Math.random() * 50) + 1;
        document.getElementById('NomePasseggero').innerHTML = NomePasseggeroCognome;
        

    }
);