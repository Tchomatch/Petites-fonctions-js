$(document).ready(function(){
    // ici on lance notre fonction animation sur un click de notre bouton
    wholeBtn.click(animation);
    
});

// Déclaration des variables utiles à l'animation
var wholeBtn = $("#toggler");
var bar1 = $("#bar1");
var bar2 = $("#bar2");
var bar3 = $("#bar3");
var bar4 = $("#bar4");
// Cette variable vient renseigner si l'animation a déjà ou non eue lieu et donc si le bouton est à son stade initial ou final
var togglerToggled = false;
// Celle ci va renseigner si le bouton est clickable ou non durant l'animation (spoiler non).
var clickable = true;


function animation(){
    // Ici on conditionne le click de lancement de l'animation
    // Si clickable est vrai, alors l'animation se lancera, sinon on dit de retourner la valeur false.
    if(clickable){
        // avant même que l'animation ne se lance, on change la valeur de clickable pour que l'utilisateur tombe dans le else sur un reclick de l'animation quand elle a lieu.
        clickable = false;
        console.log("clickable = " + clickable);
        // Si les conditions sont réunies alors on va lancer une de nos deux animations. Si toggler toggled est fausse, alors on lance l'animation normale, sinon on lance son inverse
        if(!togglerToggled) {
            AnimateRotate(45);
            togglerToggled = true;
        } else {
            AnimateReverse(0);
            togglerToggled = false;
        }
    } else {
        console.log("Non, mon animation ne bugue plus enculé va")
        return false;
    }
}

function animationOff(){
    // Cette fonction se lancer à la fin de nos animations pour remettre à zéro les valeurs de nos variables animating et clickable
    clickable = true;
    console.log("clickable = " + clickable);
}

function AnimateRotate(degres){
    // Cette fonction est la fonction d'animation initiale
    bar2.animate({
        width: 0,
    }, 300)
    
    bar3.animate({
        width: 0,
    }, 300)
      
    // jQuery ne prend pas en charge la propriété css transform : rotate dans ses animation.
    // on change donc de perspective et on donne une propriété temporaire deg qui a une valeur de 0. On lui dit que sa valeur durant l'animation va être celle de la propriété degres renseignée à la fonction, et que durant l'animation on va changer le css d'un élément de la page
    $({deg: 0}).animate({deg: degres}, {
        duration: 500,
        step: function(angle){
            
            bar1.css({
                transform: "rotate(" + angle + "deg)",
            });
            
            bar4.css({
                transform: "rotate(-" + angle + "deg)",
                
            });    
            
            
            
        }
    });

    bar1.animate({
        width: "50px",
        top: "12px"
    }, 500)
    
    //sur la toute dernière animation, on lance la fonction animationOff pour cloturer notre animation et remettre faire en sorte que notre bouton soit de nouveau clickable pour lancer l'animation de retour
    bar4.animate({
        width: "50px",
        bottom: "12px"
    }, 500, animationOff)

}

function AnimateReverse(degres){
    bar1.animate({
        width: "32px",
        top: 0
    }, 300)
    
    bar4.animate({
        width: "32px",
        bottom: 0
    }, 300)
    
    // ici même process que pour la première fonction d'animation, mais on doit différencier la fonction pour chacune des barres puisqu'elles n'ont pas la même propriété de rotation initiale au moment de l'animation
    $({deg: 45}).animate({deg: degres}, {
        duration: 300,
        step: function(angle){
            
            bar1.css({
                transform: "rotate(" + angle + "deg)",
            });    
            
        }
    });
    
    $({deg: -45}).animate({deg: degres}, {
        duration: 300,
        step: function(angle){
            
            bar4.css({
                transform: "rotate(" + angle + "deg)",
                
            });    
            
        }
    });
    
    bar2.animate({
        width: "24px",
    }, 500)
    
    // même chose que sur l'animation initiale, on lance animationOff pour re-rendre notre bouton clickable
    bar3.animate({
        width: "24px",
    }, 500, animationOff)
    
}



