// Animations

$(document).ready(function() {
  // Add click event to expandable headers
  $('.expandable').click(function() {
    $(this).next('.expandable-list').slideToggle();
  });
});

// Optional: Add more publications dynamically using JavaScript
const publicationList = document.getElementById("publication-list");


AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
