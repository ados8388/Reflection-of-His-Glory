document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Hamburger Menu Functionality
  const hamburger = document.getElementById('menuToggle');
  const navLinksContainer = document.getElementById('nav-links');

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  // Close menu when clicking on a nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Menu toggle click event
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Handle hamburger menu click for mobile
  hamburger.addEventListener('click', function() {
    navLinksContainer.classList.toggle('active');
  });

  // Close menu when clicking nav links on mobile
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === 'A' && window.innerWidth <= 768) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkToggle.classList.replace("fa-sun", "fa-moon");
}

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  darkToggle.classList.toggle("fa-sun", !isDark);
  darkToggle.classList.toggle("fa-moon", isDark);

  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});





