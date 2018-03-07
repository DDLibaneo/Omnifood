/*We use these $() to select an element in jquery*/
$(document).ready(function() {

  /* Sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    }
    else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '25%'
  });


  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); //esse 1000 são milisegundos
  });
  $('.js--scroll-to-features').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); //esse 1000 são milisegundos
  });


  /* Navigation Scroll */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


});
