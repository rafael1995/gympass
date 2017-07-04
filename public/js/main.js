 $( document ).ready(function(){ 

// Inicializando menu - Mobile
 $(".button-collapse").sideNav();

 //
  $('').change(function() {
      
  });
var aquatica = true;
var notAquatica = true;
//
listaModalidades(aquatica,notAquatica);
}); // end Ready

 function listaModalidades(aquatica,notAquatica){
    json = $.getJSON("classes.json",function(obj) {
            for( i = 0; i < obj.classes.length;i++){
                if(notAquatica && aquatica){
                    console.log("tudo");
                }
                else if(!notAquatica && aquatica){
                    console.log("Apenas aquatica");
                }
                 else if(notAquatica && !aquatica){
                    console.log("Apenas Não Aquatica");
                } else{
                    console.log("tudo");
                }
            }// end for
        });// end getJson
}
        
