var j1 = 0;
var j2 = 0;
var win = 0;
var lose = 0;

function aleatoire() {
    j2 = Math.round(Math.random() * 3 + 0.5)

    if (j2 == 1) {
        document.querySelector('#iaimg').innerHTML = "<img src='images/pierre.png' alt='Pierre'>";
    }
    else if (j2 == 2) {
        document.querySelector('#iaimg').innerHTML = "<img src='images/papier.png' alt='Papier'>";
    }
    else {
        document.querySelector('#iaimg').innerHTML = "<img src='images/ciseau.png' alt='Ciseau'>";
    };

    verif();
};

function pierre() {
    j1 = 1;
    aleatoire()
};
function papier() {
    j1 = 2;
    aleatoire()
};
function ciseau() {
    j1 = 3;
    aleatoire()
};

function verif() {
    if (j1 == j2 +1 || j1 == j2 -2) {
        document.querySelector('#iatxt').innerHTML = "Félicitation, vous avez gagné la manche";
        win +=1;
    }
    else if (j1 == j2 -1 || j1 == j2 +2) {
        document.querySelector('#iatxt').innerHTML = "Désolé, vous avez perdu la manche...";
        lose +=1;
    }
    else {
        document.querySelector('#iatxt').innerHTML = "Match nul !";
    };

};