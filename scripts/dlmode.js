const toggleButton = document.getElementById('dark-mode-toggle');

// Function to initialize dark/light mode based on user preference
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Function to toggle between dark and light mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save dark mode preference to local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());

    // Update button icon
    updateButtonIcon(isDarkMode);
}

// Function to update button icon based on current mode
function updateButtonIcon(isDarkMode) {
    const moonIcon = toggleButton.querySelector('.moon');
    const sunIcon = toggleButton.querySelector('.sun');

    if (isDarkMode) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

// Event listener for dark/light mode toggle button
toggleButton.addEventListener('click', toggleDarkMode);

// Initialize dark/light mode on page load
initializeDarkMode();

// Set the initial icon state
updateButtonIcon(document.body.classList.contains('dark-mode'));
