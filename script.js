
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
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





