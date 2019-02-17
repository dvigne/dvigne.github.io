$(document).ready(function() {
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 200) {
      $('nav').addClass('nav-dark', 400, 'swing');
    }
    else {
      $('nav').removeClass('nav-dark', 400, 'swing');
    }
  });
});

ScrollReveal({
  distance: '100px',
  viewFactor: .5,
  duration: 600,
});

ScrollReveal().reveal('.reveal-left', {
  origin: 'left',
});
ScrollReveal().reveal('.reveal-right', {
  origin: 'right',
});
ScrollReveal().reveal('.reveal-bottom', {
  viewFactor: 1,
  origin: 'bottom',
});
ScrollReveal().reveal('.reveal-scale', {
  distance: '0px',
  scale: .3
});
ScrollReveal().reveal('.reveal-scale-text', {
  // distance: '0px',
  // scale: '.3',
  origin: 'bottom',
  interval: 400,
  afterReveal: function() {
    $("#github").html(500);
    $("#forks").html(200);
    $("#users").html(500000);
    $("#watching").html(350);
  }
});
