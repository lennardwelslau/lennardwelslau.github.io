// Call scroll attributes to navbar
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
});

// Toggle the navigation menu on mobile
$(document).ready(function() {
  // Toggle mobile navigation menu
  $('#menu-icon').click(function() {
    $('.nav-links-container').toggleClass('show');
    $(this).toggleClass('active'); // Add this line
  });

  // Abstract toggle functionality
  $(document).ready(function(){
    $('.abstract-button').click(function(e){
      this.classList.toggle("active");
      e.preventDefault(); // Prevent the default behavior of the link
      // Toggle visibility of abstract for this publication entry
      var abstract = $(this).closest('.publication-entry').find('.abstract');
      abstract.slideToggle();
      
      // Change the text of the link based on the current text
      var linkText = $(this).text().trim();
      var newText = (linkText === 'Show abstract') ? 'Hide abstract' : 'Show abstract';
      $(this).text(newText);
    });
  });

  // Close the menu if clicking outside the nav-links-container or menu-icon
  $(document).click(function(event) {
    if (!$(event.target).closest('.nav-links-container, #menu-icon').length) {
      if ($('.nav-links-container').hasClass('show')) {
        $('.nav-links-container').removeClass('show');
      }
    }
  });
});
