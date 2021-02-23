var monHeure = document.getElementById("heure");
var mesMinutes = document.getElementById("minutes");
var mesSecondes = document.getElementById("secondes");
var aiguilleHeures = document.querySelector(".aHeures");
var aiguilleMinutes = document.querySelector(".aMinutes");
var aiguilleSecondes = document.querySelector(".aSecondes");

function QuelleHeureIlEst() {
    var maDate = new Date();
    var secondes = maDate.getSeconds();
    var minutes = maDate.getMinutes();
    var heures = maDate.getHours();
    //ma montre numerique
    
    // mesSecondes.innerHTML = secondes;
    // mesMinutes.innerHTML = minutes;
    // monHeure.innerHTML = heures;

    //ma montre à cadran

    //secondes
    /*
        Ici je décide de donner à mon aiguille un angle différent selon les secondes qui s'écoulent
        Pour se faire je définit une variable qui calculera l'angle qu'il faudra à mon pour qu'elle soit bien positionnéé sur le cadran
        pour que mon aiguille soit bien positionnée il faut prévoir le bon découpage, 
        L'aiguille des secondes devra bouger 60 fois pour faire le tour du cadran et donc parcourir 6° du cadran chaque secondes
        Ma variable degresSecondes prendra alors ma variable secondes qu'elle multipliera par 6 et à laquelle on ajoutea 90 pour qu'elle soit positionnée au départ à 90°, soit à la verticale.
        Je vais ensuite changer le style de mon aiguille des secondes en utilisant ma variable aiguilleSecondes et en allant modifier son style.
    */
    var degresSecondes = secondes*6 + 90;
    aiguilleSecondes.style.transform = "rotate(" + degresSecondes + "deg)";
    
    //minutes
    /*
        Même calcul pour l'aiguille des minutes, on va cependant elle aussi la faire bouger chaque secondes pour donner un rendu plus fluide.
        On va donc faie en sorte que l'aiguille des minutes bouge de 6° toutes les 60 secondes, mais aussi de fait de 0.1° chaque seconde (et donc de 1° toutes les 10 secondes). 
    */
    var degresMinutes = minutes*6 + secondes/10 + 90;
    aiguilleMinutes.style.transform = "rotate(" + degresMinutes + "deg)";
    
    //heures
    /*
        Pour l'aiguille des heures même chose on ajoute de la fluidité.
        L'aiguille des heure doit bouger de 30° chaque heure mais donc de 0.5° par minute (soit 1° toutes les deux minutes) et 1/120° chaque secondes (soit 0.5° touts les 60 secondes et 1° toutes les 120 secondes).
    */
   var degresHeures = heures*30 + minutes/2 + secondes/120 + 90;
   aiguilleHeures.style.transform = "rotate(" + degresHeures + "deg)";
}

setInterval(QuelleHeureIlEst, 1000);
