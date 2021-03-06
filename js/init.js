/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('#intro-slider').flexslider({
      animation: 'fade',
      controlNav: false,
   });

/*----------------------------------------------------*/
/*	gmaps
------------------------------------------------------*/

   var map;

   // main directions
   map = new GMaps({
      el: '#map', lat: -34.5549489, lng: -58.5242123, zoom: 15, zoomControl : true,
      zoomControlOpt: { style : 'SMALL', position: 'TOP_LEFT' }, panControl : true, scrollwheel: false, draggable: false
   });
   
   // Create infoWindow
	var infoWindow = new google.maps.InfoWindow({
		content: '<h6>COOPERATIVA DE TRABAJO NORTE LTDA</h6><p>Calle 23 Nº 2746 - Villa Zagala<br>Tel.(011) 4755-9497/7206 - ID 703*468</p>'
	});

	// Create marker
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng( -34.5550396,-58.5241107),
		title: 'COOPERATIVA DE TRABAJO NORTE LTDA',
		map: map.map,
		infoWindow: infoWindow
	});

	// This opens the infoWindow
	infoWindow.open(map, marker);

  

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });

      return false;

   });


});








