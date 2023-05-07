$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });

  $('nav ul li a').click(function(e) {
    e.preventDefault();
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  $('nav ul li:first-child a').addClass('active');
});
