// Toggle the profile menu
document.getElementById('profile-icon').addEventListener('click', () => {
    document.getElementById('profile-menu').classList.toggle('open');
});

// Common function to send the message
async function sendMessage() {
    const userInput = document.getElementById('search-box').value;
    const chatResponseContainer = document.getElementById('chat-response');

    // Clear previous response and reset input if any
    chatResponseContainer.innerHTML = ''; // Ensures only one response at a time
    if (!userInput.trim()) {
        alert('Please enter a message.');
        return;
    }

    // Show a "Thinking..." message temporarily
    const thinkingMessage = document.createElement('p');
    thinkingMessage.textContent = 'Thinking...';
    thinkingMessage.classList.add('response-message'); // Optional class for styling
    chatResponseContainer.appendChild(thinkingMessage);

    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userInput }),
        });
        const data = await response.json();

        // Remove the "Thinking..." message
        chatResponseContainer.innerHTML = '';

        // Add OpenAI response
        const openAIMessage = document.createElement('p');
        openAIMessage.textContent = data.reply;
        openAIMessage.classList.add('ai-response'); // Optional class for styling
        chatResponseContainer.appendChild(openAIMessage);

        // Dynamically adjust height of the chat response for longer content
        chatResponseContainer.style.maxHeight = '70vh';
        chatResponseContainer.style.overflowY = 'auto';

        // Clear the search box
        document.getElementById('search-box').value = '';
    } catch (error) {
        console.error(error);

        // Remove the "Thinking..." message and show an error
        chatResponseContainer.innerHTML = '';
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error: Unable to get a response.';
        errorMessage.classList.add('error-message'); // Optional class for styling
        chatResponseContainer.appendChild(errorMessage);
    }
}

// Click event for the Send button
document.getElementById('send-button').addEventListener('click', sendMessage);

// Keydown event for the Enter key
document.getElementById('search-box').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
