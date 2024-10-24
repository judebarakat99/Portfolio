// Function to display details on skill node click
const skillNodes = document.querySelectorAll('.skill-node');
const skillDescription = document.getElementById('skill-description');

skillNodes.forEach(node => {
  node.addEventListener('click', () => {
    // Toggle the active state
    node.classList.toggle('active');
    
    // Hide description for all nodes except the clicked one
    skillNodes.forEach(n => {
      if (n !== node) {
        n.classList.remove('active');
      }
    });

    // Display the details of the clicked node
    const details = node.getAttribute('data-details');
    if (node.classList.contains('active')) {
      skillDescription.innerText = details;
      skillDescription.style.display = 'block'; // Show description
    } else {
      skillDescription.style.display = 'none'; // Hide description if not active
    }
  });
});
