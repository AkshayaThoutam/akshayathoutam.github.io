document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const currentMode = localStorage.getItem('mode') || 'light';

    document.body.classList.toggle('dark-mode', currentMode === 'dark');

    modeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const newMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('mode', newMode);
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
