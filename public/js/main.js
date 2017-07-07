 $(document).ready(function() {
     // Inicializando menu - Mobile
     $(".button-collapse").sideNav();

      // Listando Modalidades
      listaModalidades();

     // Caso de alterações no filtro - Lista modalidades
     $('.filter').change(function() {
    
      
     //   $(".owl-item").remove();
          $owl.trigger('refresh.owl.carousel');
         listaModalidades();
     });


     var aquatica = false;
     var notAquatica = true;
    
     // Inicializando  Owl Carousel 
    var $owl = $('.owl-carousel').owlCarousel({
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
                 items: 4,
                 nav: true,
                 loop: false
             }
         }
     });
     $('.limpaEspacos').blur(function () {
         $(this).val($(this).val().trim());
    });



 function listaModalidades() {
  
     json = $.getJSON("classes.json", function(obj) {
         for (i = 0; i < obj.classes.length; i++) {
             if($('#scltAquatico').is(':checked') && (obj.classes[i].type=="aquatic")){
               // $(".owl-stage").empty();
                $("<div class='item col s12 m4 l4 itemCategoria'>")
                $('#carousel')
                    .owlCarousel('add',
                        "<div class='item col s12 m4 l4 itemCategoria'>" +
                             "<div class='center'>" +
                                "<h4>"+obj.classes[i].title+"</h4>" +
                                "<p>"+obj.classes[i].description+ "</p>" +
                             "</div>"+
                        " </div>"
                    )
                    .owlCarousel('update');
             }
              else if($('#scltNotAquatico').is(':checked') && (obj.classes[i].type=="non-aquatic")){
                 console.log(obj.classes[i].title);
             } 
         } // end for
     }); // end getJson
     
 }

  }); // end Ready