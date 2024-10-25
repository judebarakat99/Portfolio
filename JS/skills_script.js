document.addEventListener("DOMContentLoaded", function () {
  const skillMeters = document.querySelectorAll('.meter');

  // Function to animate skill meters when they come into view
  function animateSkillMeters() {
    skillMeters.forEach((meter) => {
      const skillLevel = meter.getAttribute('data-skill');
      meter.querySelector('.fill').style.width = skillLevel + '%';
    });
  }

  // Check if skill meters are in view
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Animate on scroll
  window.addEventListener('scroll', function () {
    skillMeters.forEach((meter) => {
      if (isInViewport(meter)) {
        animateSkillMeters();
      }
    });
  });

  // Initial animation when page is loaded
  if (isInViewport(skillMeters[0])) {
    animateSkillMeters();
  }
});
