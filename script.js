document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.getElementById('mode-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }

    toggleIcon.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
