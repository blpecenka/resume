$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 150});   

  // Add smooth scrolling on all links inside the navbar
  $("#home-navbar-collapse a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });


// Scroll to About Page Icon from Home Page
  $('#learn-more a').on('click', function 
    (event) {

      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
 
});