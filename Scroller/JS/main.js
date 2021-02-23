$(document).ready(function(){
    
    //Pour calculer bas de la page
    $(document).scroll(function(){
        // cette formule aditionne la valeur scroll top  à la taille de la fenêtre pour la comparer à la hauteur du document. Si les deux coincident, c'est que l'on arrive en bas de page et que l'on rentre dans le if.
        if( ($(window).scrollTop() + $(window).height() ) == $(document).height() ){
            setTimeout(function(){
                $(".articles").children(".contenu2").first().fadeIn("slow", function(){
                    $(".articles").children(".contenu2").first().removeClass("contenu2");  
                    $(".articles").children(".contenu2").first().removeClass("contenu2");  
                });  
            }, 1500);
        }
        
        
    });
    
});