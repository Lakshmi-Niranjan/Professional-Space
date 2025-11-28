document.addEventListener("DOMContentLoaded", function () {
  // Footer current year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Navigation toggle on mobile
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Start testimonials marquee animation immediately
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    marqueeTrack.style.animationPlayState = 'running';
  }
});
const marquee = document.querySelector('.marquee-track');
const wrapper = document.querySelector('.testimonials-marquee');

if (marquee && wrapper) {
  wrapper.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });

  wrapper.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });
}
