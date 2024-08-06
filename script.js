document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
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
});
