// Mobile Menu - Open / Close
document.addEventListener("DOMContentLoaded", function() {
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".mobile-nav");

  if(btn && nav){
    btn.addEventListener("click", function() {
      nav.classList.toggle("active");
    });

    // Mobile menu ke kisi bhi link pe click karo to menu band ho jaye
    var links = nav.querySelectorAll("a");
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        nav.classList.remove("active");
      });
    });
  }

  // Smooth Scroll - Click karne pe aaram se neeche jaye
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(a) {
    a.addEventListener("click", function(e) {
      var targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
