// Animations

$(document).ready(function() {
  // Add click event to expandable headers
  $('.expandable').click(function() {
    $(this).next('.expandable-list').slideToggle();
  });
});


AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
