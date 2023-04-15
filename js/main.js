

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

       var Offerta = 'Tariffa Standard';

       let bigliettoCostKm = 0.21;
       let PrezzoBiglietto = bigliettoCostKm * KilometriPercorrere;
       console.log(PrezzoBiglietto)

       if (FasciaEtaPass == 'Under'){
        PrezzoBiglietto = PrezzoBiglietto - ((PrezzoBiglietto * 20) / 100);
        Offerta = 'Sconto Minorenne'; 
        console.log(PrezzoBiglietto);
       } else if (FasciaEtaPass == 'Over'){
        PrezzoBiglietto = PrezzoBiglietto - ((PrezzoBiglietto * 40) / 100);
        Offerta = 'Sconto Over 65'; 
        console.log(PrezzoBiglietto);
       }

        document.getElementById('CodiceRicevuto').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.getElementById('CarrozzaRisiedente').innerHTML = Math.floor(Math.random() * 50) + 1;
        document.getElementById('NomePasseggero').innerHTML = NomePasseggeroCognome;
        document.getElementById('PrezzoBiglietto').innerHTML = PrezzoBiglietto.toFixed(2);
        document.getElementById('offertaRicevuta').innerHTML = Offerta;
    
        document.getElementById('dettagli').className = 'show';
    }
);

var pulsanteAnnulla = document.getElementById("annulla");
pulsanteAnnulla.addEventListener('click',
function() {

    document.getElementById('CodiceRicevuto').innerHTML='';
    document.getElementById('CarrozzaRisiedente').innerHTML = ''
    document.getElementById('NomePasseggero').innerHTML = '';
    document.getElementById('PrezzoBiglietto').innerHTML ='';
    document.getElementById('offertaRicevuta').innerHTML = '';

  document.getElementById('dettagli').className = 'hidden';
}
);
