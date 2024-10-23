// Intersection Observer to animate sections when they appear in the viewport
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
