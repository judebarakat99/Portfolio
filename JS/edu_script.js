// Function to handle click on education blocks
const eduBlocks = document.querySelectorAll('.edu-block');

eduBlocks.forEach(block => {
  block.addEventListener('click', () => {
    // Remove 'active' class from all blocks
    eduBlocks.forEach(b => b.classList.remove('active'));
    
    // Add 'active' class to the clicked block
    block.classList.toggle('active');
  });
});
