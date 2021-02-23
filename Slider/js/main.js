$(document).ready(function(){
        
    function changementAuto(){     // ajout d'une fonction d'avance automatique
        
        var imageEnCours = $("#auto").children(".visible");
        var imageSuivante = imageEnCours.next();
        var premiereImage = imageEnCours.parent().children().first();
        
        if(imageSuivante.length){
            imageEnCours.removeClass("visible");
            imageSuivante.addClass("visible");
        }//if end
        else{
            imageEnCours.removeClass("visible");
            premiereImage.addClass("visible");
        };  //else end
        
    }
    
    function suivante(){    //fonction image suivante slider
        
        var imageEnCours = $(this).parent().children(".interieur").children(".visible");
        var imageSuivante = imageEnCours.next();
        var premiereImage = imageEnCours.parent().children().first();
        
        if(imageSuivante.length){
            imageEnCours.removeClass("visible");
            imageSuivante.addClass("visible");
        }//if end
        else{
            imageEnCours.removeClass("visible");
            premiereImage.addClass("visible");
        };  //else end
        
        
        
    }   //function end
    
    
    function precedente(){  //fonction image précédente slider
        
        var imageEnCours = $(this).parent().children(".interieur").children(".visible");
        var imagePrecedente = imageEnCours.prev();
        var derniereImage = imageEnCours.parent().children().last();
        
        if(imagePrecedente.length){
            imageEnCours.removeClass("visible");
            imagePrecedente.addClass("visible");
        }   //if end
        else{
            imageEnCours.removeClass("visible");
            derniereImage.addClass("visible");
        };  //else end
        
        
        
    };   //function end
    
    
    $(".precedente").click(precedente);
    
    $(".suivante").click(suivante);
    
    setInterval(changementAuto, 5000)
}
);
// note pour plus tard, à voir comment minifier le code