var j1;
var j2;
var win;
var lose;
var message = document.getElementById("iatxt");
var image = document.body.getElementById("iaimg");

var i1 = 

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

function aleatoire() {
    j2 = Math.random() * 3

    if (j2 == 1) {
        image.append("<img src='images/pierre.png' alt='Pierre'>");
    }
    else if (j2 == 2) {
        image.append("<img src='images/papier.png' alt='Papier'>");
    }
    else {
        image.append("<img src='images/ciseau.png' alt='Ciseau'>");
    };

    verif();
};

function verif() {
    if (j1 == j2 -1 || j1 == j2 +2) {
        message.nodeValue = "Félicitation, vous avez gagné la manche"
        win +=1;
    }
    else if (j1 == j2 +1 || j1 == j2 -2) {
        message.nodeValue = "Désolé, vous avez perdu la manche..."
        lose +=1;
    }
    else {
        message.nodeValue = "Match nul !"
    };
};