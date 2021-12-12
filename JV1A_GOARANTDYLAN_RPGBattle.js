
//Galio
var pvGalioaff = document.getElementById("statsheros2");
var manaGalio = document.getElementById("statsheros2");
var imageGalio = document.getElementById("blordrough_corporal (2).jpg");
var pvGalio = 50

//Ryuk
var pvRyukaff = document.getElementById("statsheros1");
var manaRyuk = document.getElementById("statsheros1");
var imageRyuk = document.getElementById("blordrough_quartermaster (2).jpg");
var pvRyuk = 60

//Sana
var pvSanaaff = document.getElementById("statsheros4");
var manaSana = document.getElementById("statsheros4");
var imageSana = document.getElementById("sara-cal2 (2).jpg");
var pvSana = 45

//Izaru
var pvIzaruaff = document.getElementById("statsheros3");
var manaIzaru = document.getElementById("statsheros3");
var imageIzaru = document.getElementById("blordrough_storm_trooper (2).jpg");
var pvIzaru = 50

//PV Monstres
var pvMonstre1aff = document.getElementById("pvCavalier");
var pvMonstre2aff = document.getElementById("pvChevaliernoir");
var pvMonstre3aff = document.getElementById("pvSoldatroyal");

var pvMonstre1 = 100;
var pvMonstre2 = 120;
var pvMonstre3 = 110;


// images des Monstres
var imageMonstre1 = document.getElementById("dark_soldier-dragonrider_0 (2).png");
var imageMonstre2 = document.getElementById("dark_soldier-lord (2).png");
var imageMonstre3 = document.getElementById("dark_soldier-overlord (2).png");

//boutons
var attaque = document.getElementById("attack");
var défense = document.getElementById("defendre");
var Sortilèges = document.getElementById("sortilèges");


//Boite de dialogue
var dialogue = document.getElementById("dialogue");

//Compteur de tour
var tourJoueur = 0;

//Fonction riposte
function riposte(i) {
    setTimeout(function(){
        //Selectionne un héro et enlève des PV
        aleatoire = Math.floor(Math.random() * 4);
    if (aleatoire == 0); {
        pvGalio -= 5;
        dialogue.innerHTML = "Galio a perdu 5PV !";
        if (pvGalio <= 0); {
            imageGalio.style.transform = "rotate(-90deg)"
            dialogue.innerHTML = "Galio est mort..."
        
    }
    if (aleatoire == 1); {
        pvSana -= 5;
        dialogue.innerHTML = "Sana a perdu 5PV !";
        if (pvSana <= 0); {
            imageSana.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Sana est morte...";


        }
    }
    if (aleatoire == 2); {
        pvIzaru -= 5;
        dialogue.innerHTML = "Izaru a perdu 5PV !";
        if (pvIzaru <= 0); {
            imageIzaru.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Izaru est mort...";


        }
    }
    if (aleatoire == 3); {
        pvRyuk -= 5;
        dialogue.innerHTML = "Ryuk a perdu 5PV !";
        if (pvRyuk <= 0); {
            imageRyuk.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Ryuk est mort...";


        }
    }
    pvGalioaff.innerHTML = pvGalio;
    pvSanaaff.innerHTML = pvSana;
    pvIzaruaff.innerHTML = pvIzaru;
    pvRyukaff.innerHTML = pvRyuk;
    } 2000 * (i+1)
    //Selectionne un héros et enlève des PV
    
})


attaque.onclick = function () {

    //Selectionne un monstre et enlève des PV
    aleatoire = Math.floor(Math.random() * 3);
    if (aleatoire == 0) {
        pvCavalier -= 10;
        dialogue.innerHTML = "Cavalier a perdu 10PV !";
        if (pvCavalier <= 0) {
            imageMonstre1.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Cavalier a été terrassé";

        }
    }
    }
    if (aleatoire == 1) {
        pvChevaliernoir -= 10;
        dialogue.innerHTML = "Chevalier noir a perdu 10PV !";
        if (pvChevaliernoir <= 0) {
            imageMonstre2.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Chevalier noir a été terrassé";
        }  
    }
    if (aleatoire == 2); {
        pvSoldatroyal -= 10;
        dialogue.innerHTML = "Soldat Royal a perdu 10PV !";
        if (pvSoldatroyal <= 0) {
            imageMonstre3.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Soldat Royal a été terrassé";
        }
tourJoueur += 1;
if (tourJoueur > 3); {
tourJoueur = 0;
for (i=0;i<3;i++);{
riposte(i);    }}
    pvMonstre1aff.innerHTML = pvMonstre1;
    pvMonstre2aff.innerHTML = pvMonstre2;
    pvMonstre3aff.innerHTML = pvMonstre3;


    // Tour du joueur et animation
if (tourJoueur == 0); {
imageIzaru.animate([
// Mouvement
{ transform: 'translateX(0)' },
{ transform: 'translateX(-50px)' },
{ transform: 'translateX(0px)' },
], {
// Durée
duration: 300,

});
}
if (tourJoueur == 1); {
imageGalio.animate([

{ transform: 'translateX(0)' },
{ transform: 'translateX(-50px)' },
{ transform: 'translateX(0px)' },
], {

duration: 300,

});
}
if (tourJoueur == 2); {
imageRyuk.animate([

{ transform: 'translateX(0)' },
{ transform: 'translateX(-50px)' },
{ transform: 'translateX(0px)' },
], {

duration: 300,

});
}
if (tourJoueur == 3); {
imageSana.animate([

{ transform: 'translateX(0)' },
{ transform: 'translateX(-50px)' },
{ transform: 'translateX(0px)' },
], {

duration: 300,
});
}


        }
        


    }


