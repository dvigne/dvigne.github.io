$(function() {
  $(document).ready(function (e) {

    $('h1').fitText(
      1.2, {
        minFontSize: '35px',
        maxFontSize: '65px'
      }
    );

    window.sr = ScrollReveal();
    sr.reveal('.about-text', {
      duration: 600,
      viewFactor: .5,
      scale: 0.3,
      distance: '0px',
    }, 200);

  });
});
