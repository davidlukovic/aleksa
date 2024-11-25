// Function to toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById('profile-menu');
    menu.classList.toggle('open'); // Add or remove the 'open' class
}

// Add click event listener to the profile icon
document.getElementById('profile-icon').addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    const profileIconContainer = document.querySelector('.profile-icon-container');
    const menu = document.getElementById('profile-menu');

    // If click is outside the menu and the icon, close the menu
    if (!profileIconContainer.contains(event.target)) {
        menu.classList.remove('open');
    }
});
// Function to clear the placeholder when the input is focused
function clearPlaceholder() {
    const searchBox = document.getElementById('search-box');
    searchBox.placeholder = ''; // Clear the placeholder
}

// Function to restore the placeholder when the input loses focus
function restorePlaceholder() {
    const searchBox = document.getElementById('search-box');
    if (searchBox.value === '') {
        searchBox.placeholder = 'How can I help you today?'; // Restore the placeholder only if the input is empty
    }
}
