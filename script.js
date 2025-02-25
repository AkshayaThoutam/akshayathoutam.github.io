document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Function to apply the theme based on local storage value
    function applyTheme(theme) {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }

    // Check local storage for the theme and apply it
    const storedTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(storedTheme);

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        sidebar.scrollTop = 0; // Reset scroll position to the top whenever sidebar is toggled
    });

    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Ensure the sidebar visibility state is correct on load
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.add('show');
    }

    // Adjust sidebar visibility on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('show');
        } else {
            sidebar.classList.add('show');
        }
    });

    // Maintain dark mode when navigating between pages
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', currentTheme);
        });
    });
});