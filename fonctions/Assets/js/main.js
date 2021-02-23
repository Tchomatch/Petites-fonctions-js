function nombreDeMatchs (nbreParticipants) {
    var nbreDeMatch = 0;
    if(nbreParticipants.isInterger) {
        for (var i=nbreParticipants ; i > 1 ; i = i){        
            if (i%2 != 0){
                i = (i/2) + .5
                nbreDeMatch += i-1;
                console.log("step impair " + nbreDeMatch)
            } else {
                i = i/2
                nbreDeMatch += i;
                console.log("step pair " + nbreDeMatch)
            }
        }
        return nbreDeMatch;
    } else {
        return "Veuillez choisir un nombre de participants entier."
    }    
}
console.log(nombreDeMatchs(2500));