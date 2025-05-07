let isDark = false;

function toggleDarkMode() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const btn = document.getElementById('darkModeButton');
    if (btn) btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('dark mode ho');
    isDark = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.toggle('dark', isDark);

    const btn = document.getElementById('darkModeButton');
    if (btn) {
        btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        btn.addEventListener('click', toggleDarkMode); // ← this is the key line
    }

    document.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    const fadeUps = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeUps.forEach((el) => observer.observe(el));

    setTimeout(() => {
        fadeUps.forEach((el) => el.classList.add('visible'));
    }, 300);
});