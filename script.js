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
    e.preventDefault();

    const hash = this.hash;
    const targetOffset = $(hash).offset().top - 20 ; // Adjust the offset (5 pixels above the target)

    $('html, body').animate(
      {
        scrollTop: targetOffset
      },
      800, // Adjust the duration as needed
      function() {
        // Update the hash in the URL after scrolling is complete
        window.location.hash = targetOffset;
      }
    );
  });
});