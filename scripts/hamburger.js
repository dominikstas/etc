document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const menuItems = document.getElementById('menu-items');

    hamburger.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });
});