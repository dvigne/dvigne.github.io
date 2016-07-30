$(function() {
  $(document).ready(function (e) {
    $(window).on('load', function(e) {
      $('.reveal').css('display', 'block');
        window.sr = ScrollReveal();
        sr.reveal('.reveal', {
          duration: 700,
          delay: 500,
          viewFactor: 1,
          scale: 0.3,
          distance: '0px'
        }, 700)
        sr.reveal('.about-text', {
          duration: 600,
          viewFactor: .5,
          scale: 0.3,
          distance: '0px',
        }, 200);
        sr.reveal('.support-text', {
          duration: 600,
          viewFactor: .5,
          scale: 0.3,
          distance: '0px',
        }, 200);
        $('h1').fitText(
          1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
          }
        );
    });
  });
});
