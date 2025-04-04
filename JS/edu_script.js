// Education section toggle functionality
const educationBlocks = document.querySelectorAll('.education-block');
const educationDetails = document.getElementById('education-details');
const educationHeadings = document.getElementById('education-headings');
const educationSection = document.getElementById('education');

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
        let newContent = '';

        if (block.id === 'high-school') {
            newContent = `
                <h3>Jordanian International Schools, Jordan</h3>
                <h4>High School Diploma - Tawjihi Scientific Stream</h4>
                <h4>Graduation Date: June 2017</h4>
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
            newContent = `
                <h3>Princess Sumaya University for Technology, Jordan</h3>
                <h4>Bachelor's Degree in Computer Science</h4>
                <h4>Graduation Date: June 2021</h4>
                <h4>Bachelor's Degree Details</h4>
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
        } else if (block.id === 'master-degree') {
            newContent = `
                <h3>University of Manchester, UK</h3>
                <h4>Master's Degree in Robotics</h4>
                <h4>Graduation Date: September 2025</h4>
                <h4>Master's Degree Details</h4>
                <ul>
                    <li>Multidisciplinary program integrating mechanical, electronic, and computer science principles in robotics and autonomous systems.</li>
                    <li><strong>Key Focus Areas:</strong>
                        <ul>
                            <li>Mechatronics & Control – Design and implementation of robotic systems.</li>
                            <li>Artificial Intelligence & Machine Learning – Application of AI in autonomous systems.</li>
                            <li>Human-Robot Interaction & Cognitive Robotics – Developing intuitive and intelligent robotic solutions.</li>
                        </ul>
                    </li>
                    <li><strong>Modules Completed:</strong>
                        <ul>
                            <li>Robotic Systems</li>
                            <li>Foundations of Machine Learning</li>
                            <li>Software for Robotics</li>
                            <li>Autonomous Mobile Robots</li>
                            <li>Robotic Manipulators</li>
                            <li>Cognitive Robotics</li>
                            <li>Computer Vision</li>
                            <li>Year-long Robotic Systems Design Project</li>
                        </ul>
                    </li>
                    <li><strong>Developed Skills:</strong> Robot system design, programming, integration, AI-driven automation, data-driven decision-making, and autonomous systems.</li>
                </ul>
            `;
        }

        // Toggle the details section
        if (currentDetails.includes(newContent)) {
            educationDetails.innerHTML = ''; // Clear details
            educationDetails.style.display = 'none'; // Hide details div
            educationHeadings.style.display = 'flex';
            educationSection.style.height = '400px';


            // Remove active class and reset arrow
            block.classList.remove('active');
            arrow.style.transform = 'rotate(180deg)'; // Flip arrow back down

        } else {
            educationDetails.innerHTML = newContent; // Update content
            educationDetails.style.display = 'block'; // Show details div
            educationHeadings.style.display = 'block';
            educationSection.style.height = 'fit-content';

            // Remove active class and reset arrows for all blocks
            educationBlocks.forEach(b => {
                b.classList.remove('active');
                b.querySelector('.arrow-hint').style.transform = 'rotate(270deg)'; // Reset all arrows
            });

            // Activate the clicked block and flip its arrow
            block.classList.add('active');
            arrow.style.transform = 'rotate(180deg)'; // Flip arrow up
        }
    });
});
