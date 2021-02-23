/* 
    On stock dans une variable le statut de la partie, qui informera le joueur si c'est à son tout, au tour de l'ordinateur ou si la partie est terminée
 */
const affichageStatut = document.querySelector(".statut");

/*
    On stock dans une variable si la partie est active ou non, elle sera inactive en cas de victoire, défaite ou match nul
*/
let partieActive = true;

/*
    On stock dans une variable le joueur actif, X ou O, mais avec X comme valeur par défaut
*/
let joueurActif = "X";

/*
    Ici on stock dans une variable le statu de la partie en cours, les "" seront peu à peu remplacés par des X et O
*/
let statutPartie = ["", "", "", "", "", "", "", "", ""];

/* 
    On stock dans une variable un message de vistoire
*/
const messageVictoire = () => `Les ${joueurActif} ont gagné`;

/* 
    On stock dans une variable un message de match nul
*/
const messageNul = () => `Match nul!`;

/* 
    On stock dans une variable à qui est le tour en cours
*/
const messageJoueurActif = () => `Au tour des ${joueurActif}`;

/*
On définit la valeur par défaut du HTML de affichageStatut en lui donnant pour valeur le tour du joueur actif.
*/
affichageStatut.innerHTML = messageJoueurActif();

/*
Cette fonction gère les cliques sur les cellules. Si la cellule n'a pas déjà été jouée, alors la considère comme jouée (bravo Captain Obvious), si elle a déjà été jouée, il ne faut pas qu'on puisse en remplacer le contenu, donc on ne renvoi aucune valeur
*/
function clickCellule(uneCelluleJouee) {
    const celluleJouee = uneCelluleJouee.target;

    const idCelluleJouee = parseInt(
        celluleJouee.getAttribute("index-cellule")
    );

    if (statutPartie[idCelluleJouee] !== "" || !partieActive) {
        return;
    }

    gestionCellulesJouees(celluleJouee, idCelluleJouee);
    validationResultat();
};

/*
Cette fonction ira remplacer le contenu de statuPartie et du HTML des cellules jouées
*/
function gestionCellulesJouees(celluleJouee, idCelluleJouee) {
    statutPartie[idCelluleJouee] = joueurActif;
    celluleJouee.innerHTML = joueurActif;
};

/*
Ici on stock tous les cas de victoire possibles en se basant sur l'index de statuPatie, les chiffres correspondant donc à une position de case (ex : 1 = en haut au centre)
*/
const conditionsVictoire = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

/*
Cette fonction validera les résultats de la partie en cours au fur et à mesure qu'elle se poursuit.
Plusieurs cas de figure sont à envisager au cours de la partie : 
- la partie peut être gagnée par un des deux joueurs
-> ici on ira comparer le statutPartie à conditionsVictoire pour vérifier que qu'un des schéma de victoire soit ou non présent dans statuPartie, si tel est le cas la manche est gagnée par le joueur qui vérifie ces conditions.
- la partie peut finir par un match nul
-> ici on vérifie déjà que statutPartie ne contienne plus aucun blanc (""), si tel est le cas c'est soit qu'il y a victoire d'un des deux joueurs ou que la partie n'est pas terminée. Si statut partie ne contient aucun blanc et qu'aucun joueur n'est victorieux, alors la partie est nulle.
- la partie peut ne pas être terminée
si aucun des deux précédent cas n'est vrai on passe au tour du joueur suivant.
*/
function validationResultat() {
    let mancheGagnee = false;
    let mancheNulle = !statutPartie.includes("");

    for (let i = 0; i <= 7; i++) {
        const conditionVictoire = conditionsVictoire[i];
        let a = statutPartie[conditionVictoire[0]];
        let b = statutPartie[conditionVictoire[1]];
        let c = statutPartie[conditionVictoire[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            mancheGagnee = true;
            break
        }
    }

    if (mancheGagnee) {
        affichageStatut.innerHTML = messageVictoire();
        partieActive = false;
        return;
    }
    if (mancheNulle) {
        affichageStatut.innerHTML = messageNul();
        partieActive = false;
        return;
    }

    changementJoueur();
};

function changementJoueur() {
    joueurActif = joueurActif === "X" ? "O" : "X";
    affichageStatut.innerHTML = messageJoueurActif();
}

function gameReset() {
    partieActive = true;
    joueurActif = "X";
    statutPartie = ["", "", "", "", "", "", "", "", ""];
    affichageStatut.innerHTML = messageJoueurActif();
    document.querySelectorAll(".cellule").forEach(cellule => cellule.innerHTML = "");
};

document.querySelectorAll('.cellule').forEach(cellule => cellule.addEventListener('click', clickCellule));
document.querySelector('.reset').addEventListener('click', gameReset);