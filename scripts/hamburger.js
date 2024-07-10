document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const menuItems = document.getElementById('menu-items');

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent this click from being caught by the document click listener
        menuItems.classList.toggle('active');
        const isExpanded = menuItems.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuItems.contains(event.target) && !hamburger.contains(event.target) && menuItems.classList.contains('active')) {
            menuItems.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when resizing to desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuItems.classList.contains('active')) {
            menuItems.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});
