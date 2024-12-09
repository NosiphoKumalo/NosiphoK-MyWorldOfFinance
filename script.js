// List of soft skills
const softSkills = [
    "Attention to Precision", 
    "Active Listening", 
    "Calm under Pressure", 
    "Team Collaboration Spirit", 
    "Discreet Confidentiality", 
    "Presentation Skills", 
    "Resilience and Flexibility"
];

const container = document.getElementById('softSkillsContainer');
const bubbles = [];

// Create the bubbles
softSkills.forEach((skill, index) => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = skill;
    container.appendChild(bubble);

    // Randomize bubble position and speed
    const size = Math.random() * 50 + 50;  // Random size between 50px and 100px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * (container.offsetWidth - size)}px`;
    bubble.style.top = `${Math.random() * (container.offsetHeight - size)}px`;

    // Set initial velocity
    bubble.velocityX = (Math.random() - 0.5) * 4; // Horizontal speed
    bubble.velocityY = (Math.random() - 0.5) * 4; // Vertical speed

    // Store the bubble for further manipulation
    bubbles.push(bubble);
});

// Function to move the bubbles
function moveBubbles() {
    bubbles.forEach(bubble => {
        let x = parseFloat(bubble.style.left);
        let y = parseFloat(bubble.style.top);

        // Move the bubble based on its velocity
        x += bubble.velocityX;
        y += bubble.velocityY;

        // Check for collision with container edges (bounce off)
        if (x <= 0 || x >= container.offsetWidth - bubble.offsetWidth) {
            bubble.velocityX *= -1; // Reverse direction
            bubble.style.backgroundColor = '#FF6347'; // Change color on impact
        }

        if (y <= 0 || y >= container.offsetHeight - bubble.offsetHeight) {
            bubble.velocityY *= -1; // Reverse direction
            bubble.style.backgroundColor = '#FF6347'; // Change color on impact
        }

        // Update the bubble's position
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
    });

    // Detect collisions between bubbles
    for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
            const bubble1 = bubbles[i];
            const bubble2 = bubbles[j];

            const distX = parseFloat(bubble1.style.left) - parseFloat(bubble2.style.left);
            const distY = parseFloat(bubble1.style.top) - parseFloat(bubble2.style.top);
            const distance = Math.sqrt(distX * distX + distY * distY);

            // If the distance is less than the sum of the radii, a collision has occurred
            if (distance < (bubble1.offsetWidth / 2 + bubble2.offsetWidth / 2)) {
                bubble1.velocityX *= -1;
                bubble1.velocityY *= -1;
                bubble2.velocityX *= -1;
                bubble2.velocityY *= -1;

                // Visual effect for collision
                bubble1.style.backgroundColor = '#FF6347';
                bubble2.style.backgroundColor = '#FF6347';
            }
        }
    }

    // Repeat the function
    requestAnimationFrame(moveBubbles);
}

// Start the animation
moveBubbles();
