// Call scroll attributes to navbar
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });

  // Smooth scrolling for all navigation links
  $('nav a').on('click', function(e) {
    const href = $(this).attr('href');

    // Check if the clicked link is for the CV
    if (href === 'CV/CV_Lennard_Welslau.pdf') {
      // Directly open the CV file
      window.open(href, '_blank');
    } else {
      e.preventDefault();

      const hash = this.hash;
      const targetOffset = $(hash).offset().top - 20;

      $('html, body').animate(
        {
          scrollTop: targetOffset
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});