// Call scroll attributes to navbar
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });

  // Smooth scrolling for specific navigation links
  $('nav a').on('click', function(e) {
    const href = $(this).attr('href');

    // Check if the href starts with a '#' symbol to exclude direct link
    if (href.startsWith('#')) {
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
    }
  });
});
