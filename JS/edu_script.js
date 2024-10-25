
// Education section toggle functionality
const educationBlocks = document.querySelectorAll('.education-block');
const educationDetails = document.getElementById('education-details');
const educationHeadings = document.getElementById('education-headings');
const educationSection= document.getElementById('education');

educationBlocks.forEach(block => {
    block.addEventListener('click', () => {
      // Remove 'active' class from all blocks
      educationBlocks.forEach(b => b.classList.remove('active'));
      
      // Add 'active' class to the clicked block
      block.classList.toggle('active');
    });
  });
  

educationBlocks.forEach(block => {
  block.addEventListener('click', () => {
    const currentDetails = educationDetails.innerHTML;
    
    // Determine the content to show based on the block clicked
    let newContent = '';
    if (block.id === 'high-school') {
      newContent = `
        <h4>High School Details</h4>
        <ul>
            <li>Honored for scientific excellence after winning many scientific competitions</li>
            <li>Honored for extracurricular activities</li>
            <li>Helped organize school events</li>
            <li>Founded the first "Formula 1 in Schools" team in my school</li>
            <li>Gained volunteering experience of 240 hours</li>
        </ul>

      `;
    } else if (block.id === 'bachelor-degree') {
      newContent = `<h4>Bachelor's Degree Details</h4>
        <ul>
            <li>Graduated with an Excellent GPA of 84.4%</li>
            <li>Special Award Recipient: "Princess Sumaya Award For The Most Outstanding Student" for academic and extracurricular excellence</li>
            <li>Key Coursework:
                <ul>
                    <li>Advanced Programming</li>
                    <li>Machine Learning</li>
                    <li>Data Structures</li>
                    <li>Cloud Computing</li>
                    <li>Artificial Intelligence</li>
                    <li>Algorithms</li>
                </ul>
            </li>
            <li>Graduation Project: 
                <strong>"Design and Implementation of Speech-to-Sign Language Interpreter System Using Deep Learning and Mr. Pepper Robot"</strong> – Ranked 4th among 35 students in the department
            </li>
            <li>Study Abroad: Erasmus Semester, Altınbaş University (Turkey) – Spring 2020
                <ul>
                    <li>Cross-cultural experience in learning emerging technologies and robotics</li>
                    <li>Courses: Artificial Intelligence, Software Engineering Principles</li>
                </ul>
            </li>
            <li>Extracurricular:
                <ul>
                    <li>Founded IEEE RAS PSUT Robotics Society</li>
                    <li>Vice Chair, IEEE PSUT Student Chapter</li>
                    <li>Head of Technical Team, DART Entrepreneurship Society</li>
                    <li>Volunteering: 300+ hours</li>
                </ul>
            </li>
        </ul>
      `;
    }
    
    // If the same block is clicked again, hide the details
    if (currentDetails.includes(newContent)) {
      educationDetails.innerHTML = ''; // Clear details
      educationDetails.style.display = 'none'; // Hide details div
      educationHeadings.style.display = 'flex';
      educationSection.style.height = '300px';
    } else {
      educationDetails.innerHTML = newContent; // Update content
      educationDetails.style.display = 'block'; // Show details div
      educationHeadings.style.display = 'block';
      educationSection.style.height = 'fit-content';
    }
  });
});
