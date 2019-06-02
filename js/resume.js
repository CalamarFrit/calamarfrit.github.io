(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

//Carousel
$('.carousel').carousel({
    interval: false,
})

$('#carouselExampleIndicators').on('slid', '', checkitem);

function checkitem()                        // check function
{
    var $this = $('#carouselExampleIndicators');
    if ($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.carousel-control-next').hide();
    } else if ($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.carousel-control-prev').hide();
    } else {
        $this.children('.carousel-control').show();

    }
}
//End Carousel

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
