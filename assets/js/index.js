$(document).ready(function() {
  // Close navigation pane when navigation link clicked
  $('.nav-item').click(function() {
    bootstrap.Offcanvas.getInstance("#navigationSlider").hide();
  });

  $('.lazyload').removeClass('d-none'); // Once completely loaded, display hidden elements

  $(window).on('scroll', function() {
    if($(window).scrollTop() > 200) {
      $('.nav-transition').addClass('nav-dark', 400, 'swing');
    }
    else {
      $('.nav-transition').removeClass('nav-dark', 400, 'swing');
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('#navbarNavAltMarkup').collapse('hide');
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
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
    origin: 'bottom',
  });
  ScrollReveal().reveal('.reveal-scale', {
    distance: '0px',
    scale: .3
  });
  ScrollReveal().reveal('.reveal-scale-interval', {
    viewFactor: 1,
    distance: '0px',
    scale: .3,
    interval: 150,
  });
  ScrollReveal().reveal('.reveal-scale-text', {
    // distance: '0px',
    // scale: '.3',
    origin: 'bottom',
    interval: 400,
    afterReveal: function() {
      $.getJSON("https://api.github.com/users/dvigne", function(data) {
        $("#repositories").html(data['public_repos']);
        $("#gists").html(data['public_gists']);
        $("#followers").html(data['followers']);
        $("#following").html(data['following']);
      });
    }
  });
  ScrollReveal().reveal('.reveal-scale-card', {
    viewFactor: 0.1,
    origin: 'bottom',
    interval: 100,
  });
});
