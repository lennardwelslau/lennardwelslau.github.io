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

// Expand and collapse abstract entries
$(document).ready(function(){
  $('.show-abstract').click(function(e){
    e.preventDefault(); // Prevent the default behavior of the link
    // Toggle visibility of abstract for this publication entry
    var abstract = $(this).closest('.publication-entry').find('.abstract');
    abstract.slideToggle();
    
    // Change the text of the link based on the current text
    var linkText = $(this).text().trim();
    var newText = (linkText === '[Show abstract]') ? '[Hide abstract]' : '[Show abstract]';
    $(this).text(newText);
  });
});
