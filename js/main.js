
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

    if ( $(this).scrollTop() > 300 ) {

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


