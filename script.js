var j1 = 0;
var j2 = 0;
var win = 0;
var lose = 0;
var replay = false;

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
    if (replay == false) {
        j1 = 1;
        aleatoire()
    }
};
function papier() {
    if (replay == false) {
        j1 = 2;
        aleatoire()
    }
};
function ciseau() {
    if (replay == false) {
        j1 = 3;
        aleatoire()  
    }
};

function verif() {
    if (j1 == j2 +1 || j1 == j2 -2) {
        if (win < 2) {
            document.querySelector('#iatxt').innerHTML = "Félicitation, vous avez gagné la manche";
        }
        else {
            document.querySelector('#iatxt').innerHTML = "Bravo, vous avez gagné la partie (GG)";
            restart();
        }
            
        win +=1;
    }
    else if (j1 == j2 -1 || j1 == j2 +2) {
        if (lose < 2) {
            document.querySelector('#iatxt').innerHTML = "Désolé, vous avez perdu la manche...";
        }
        else {
            document.querySelector('#iatxt').innerHTML = "Condoléances, vous avez perdu la partie...(NUL)";
            restart();
        }
        
        lose +=1;
    }
    else {
        document.querySelector('#iatxt').innerHTML = "Match nul !";
    };
    document.querySelector('#gagnant').innerHTML = "Gagnant : " + win;
    document.querySelector('#perdant').innerHTML = "Perdant : " + lose;
};

function restart() {
    replay = true;
    document.querySelector('#reset').innerHTML = "<button onclick='refresh()'>Ressayer</button>";
};

function refresh() {
    win = 0;
    lose = 0;
    replay = false;
    document.querySelector('#iatxt').innerHTML = "";
    document.querySelector('#iaimg').innerHTML = "";
    document.querySelector('#reset').innerHTML = "";
    document.querySelector('#gagnant').innerHTML = "Gagnant : " + win;
    document.querySelector('#perdant').innerHTML = "Perdant : " + lose;
};