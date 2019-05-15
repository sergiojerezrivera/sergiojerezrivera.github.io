
//SCROLLING Funtion for LINKS
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


//SCROLLING Function for ARROW
//SCROLLING FUNCTIONALITY WITH EFFECTS

$(window).scroll(function(){

    if ( $(this).scrollTop() > 1100 ) {

      $('.scroll-to-top').fadeIn();

    } else {

      $('.scroll-to-top').fadeOut();

    }

  });

  // on click, animate the scroll up the page
  $('.scroll-to-top').click( function( e ) {

    e.preventDefault();
    $('html, body').animate( {scrollTop : 0}, 1000 );
    

  });


//PARTICLES EFFECT BACKGROUND
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


//BUTTON RESET FORM FIELDS
$('#reset-button').on('click', function(e){
  //e.preventDefault();
  document.forms[0].reset();
});
