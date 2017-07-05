 $(document).ready(function() {

     // Inicializando menu - Mobile
     $(".button-collapse").sideNav();

     //
     $('').change(function() {

     });
     var aquatica = true;
     var notAquatica = true;
     //
     listaModalidades(aquatica, notAquatica);
     // Inicializando  Owl Carousel 
     $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 1,
                 nav: true
             },
             600: {
                 items: 3,
                 nav: false
             },
             1000: {
                 items: 5,
                 nav: true,
                 loop: false
             }
         }
     });
 }); // end Ready

 function listaModalidades(aquatica, notAquatica) {
     json = $.getJSON("classes.json", function(obj) {
         for (i = 0; i < obj.classes.length; i++) {
             if (notAquatica && aquatica) {
                 console.log("tudo");
             } else if (!notAquatica && aquatica) {
                 console.log("Apenas aquatica");
             } else if (notAquatica && !aquatica) {
                 console.log("Apenas Não Aquatica");
             } else {
                 console.log("tudo");
             }
         } // end for
     }); // end getJson
 }