$(document).ready(function() {

 // top menu toggle
  var toggleButton2 = document.getElementById("topmenu-toggle");
  var menu2 = document.getElementById("primary-topnav");

  if (toggleButton2 && menu2) {
    toggleButton2.addEventListener("click", function() {
      menu2.classList.toggle("js-menu-is-open2");
    });
  }

  // main menu toggle
  var toggleButton = document.getElementById("menu-toggle");
  var menu = document.getElementById("primary-nav");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", function() {
      menu.classList.toggle("js-menu-is-open");
    });
  }

  // initialize smooth scroll
  $("a").smoothScroll({ offset: -20 });

  // add lightbox class to all image links
  $("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']").attr("data-lity", "");
});
