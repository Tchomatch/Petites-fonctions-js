function nombreDeMatchs (nbreParticipants) {
    var nbreDeMatch = 0;
    var palier = 1;
    if(Number.isInteger(nbreParticipants)) {
        for (var i=nbreParticipants ; i > 1 ; i = i){        
            if (i%2 != 0){
                i = (i/2) + .5;
                nbreDeMatch += i-1;
                console.log("palier " + palier + "(étape impaire), " + nbreDeMatch + " match ont été disputés");
                palier++;
            } else {
                i = i/2;
                nbreDeMatch += i;
                console.log("palier " + palier + "(étape paire), " + nbreDeMatch + " match ont été disputés");
                palier++;
            }
        }
        return nbreDeMatch;
    } else {
        return "Veuillez choisir un nombre de participants entier."
    }    
}
// console.log(nombreDeMatchs("Coucou"));
console.log(nombreDeMatchs(100));
// console.log(nombreDeMatchs(1024));
