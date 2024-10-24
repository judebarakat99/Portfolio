// Function to display award details on card click
const awardCards = document.querySelectorAll('.award-card');
const awardDescription = document.getElementById('award-description');

awardCards.forEach(card => {
  card.addEventListener('click', () => {
    // Hide description for all cards except the clicked one
    awardCards.forEach(c => {
      if (c !== card) {
        c.classList.remove('active');
      }
    });

    // Toggle the active state and show details
    card.classList.toggle('active');
    const details = card.getAttribute('data-details');
    if (card.classList.contains('active')) {
      awardDescription.innerText = details;
      awardDescription.style.display = 'block'; // Show description
    } else {
      awardDescription.style.display = 'none'; // Hide description if not active
    }
  });
});
