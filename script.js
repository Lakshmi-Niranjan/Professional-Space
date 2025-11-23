document.addEventListener("DOMContentLoaded", function () {

  // Update copyright year dynamically
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle functionality
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      // Update aria-expanded for accessibility
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when a navigation link is clicked (optional)
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

});
