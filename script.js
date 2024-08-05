document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        toggle.checked = true;
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    } else {
        toggle.checked = false;
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
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
