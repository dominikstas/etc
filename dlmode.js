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
    document.body.classList.toggle('light-mode');

    // Save dark mode preference to local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());
}

// Event listener for dark/light mode toggle button
toggleButton.addEventListener('click', toggleDarkMode);

// Initialize dark/light mode on page load
initializeDarkMode();
