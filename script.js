// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('show');
}

// Auto close mobile menu on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileNav').classList.remove('show');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

console.log("Ukhra Smart Career Academy website loaded");