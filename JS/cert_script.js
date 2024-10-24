// Tooltip functionality for certifications badges
const badges = document.querySelectorAll('.badge');
const tooltip = document.getElementById('tooltip');

badges.forEach(badge => {
  badge.addEventListener('mouseover', (event) => {
    const title = badge.getAttribute('data-title');
    const date = badge.getAttribute('data-date');
    const skills = badge.getAttribute('data-skills');

    tooltip.innerHTML = `<strong>${title}</strong><br>Completed: ${date}<br>${skills}`;
    tooltip.style.display = 'block';
    tooltip.style.top = `${event.pageY}px`;
    tooltip.style.left = `${event.pageX + 10}px`;
  });

  badge.addEventListener('mouseout', () => {
    tooltip.style.display = 'none'; // Hide tooltip
  });

  badge.addEventListener('mousemove', (event) => {
    tooltip.style.top = `${event.pageY}px`;
    tooltip.style.left = `${event.pageX + 10}px`; // Adjust position on mouse move
  });
});
