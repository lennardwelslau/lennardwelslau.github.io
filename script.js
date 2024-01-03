// Call scroll attributes to navbar
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });

  // Smooth scrolling for all navigation links except the CV link
  $('nav a:not([href="CV/CV_Lennard_Welslau.pdf"])').on('click', function(e) {
    e.preventDefault();

    const hash = this.hash;
    const targetOffset = $(hash).offset().top - 20;

    $('html, body').animate(
      {
        scrollTop: targetOffset
      },
      800,
      function() {
        window.location.hash = targetOffset;
      }
    );
  });
});