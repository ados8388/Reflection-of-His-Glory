document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("nav-links");
  const body = document.body;

  // Prevent body scrolling when menu is open
  function toggleBodyScroll(isMenuOpen) {
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }

  // Toggle menu function
  function toggleMenu(event) {
    if (event) {
      event.preventDefault();
    }
    const isMenuOpen = navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    toggleBodyScroll(!isMenuOpen);
  }

  // Menu toggle click event
  menuToggle.addEventListener("click", toggleMenu);

  // Close menu when clicking on links
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isMenuOpen = navLinks.classList.contains('active');
    if (isMenuOpen && !menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggleMenu();
    }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        body.style.overflow = '';
      }
    }, 250);
  });

  // Handle touch events for better mobile experience
  let touchStartY;
  let touchEndY;

  navLinks.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  navLinks.addEventListener('touchmove', (e) => {
    touchEndY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchEndY;
    const navLinksElement = e.currentTarget;
    const isScrollable = navLinksElement.scrollHeight > navLinksElement.clientHeight;
    const isAtTop = navLinksElement.scrollTop === 0;
    const isAtBottom = navLinksElement.scrollTop + navLinksElement.clientHeight === navLinksElement.scrollHeight;

    // Prevent default only if trying to scroll past bounds
    if (!isScrollable || 
        (isAtTop && touchDiff < 0) || 
        (isAtBottom && touchDiff > 0)) {
      e.preventDefault();
    }
  }, { passive: false });
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





