// Mobile Menu - Open / Close
function toggleMenu() {
  var nav = document.getElementById("mobileNav");
  nav.classList.toggle("active");
}

// Mobile menu ke kisi bhi link pe click karo to menu band ho jaye
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".mobile-nav a");
  links.forEach(function(link) {
    link.addEventListener("click", function() {
      document.getElementById("mobileNav").classList.remove("active");
    });
  });

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
