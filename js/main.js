
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
        var NomeCognome = document.getElementById("name");
        var NomePasseggeroCognome = NomeCognome.value;
        console.log(NomePasseggeroCognome);

        var KilometriDaFare = document.getElementById("Kilometri");
        var KilometriPercorrere = parseInt(KilometriDaFare.value);
        console.log(KilometriPercorrere);

        var FasciaEta = document.getElementById("selectAge");
        var FasciaEtaPass = FasciaEta.value;
        console.log(FasciaEtaPass);

       var Offerta = 'Tariffa';


       if (FasciaEtaPass == 'Under'){

       }

        document.getElementById('CodiceRicevuto').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.getElementById('CarrozzaRisiedente').innerHTML = Math.floor(Math.random() * 50) + 1;
        document.getElementById('NomePasseggero').innerHTML = NomePasseggeroCognome;
        

    }
);