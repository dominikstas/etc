const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
