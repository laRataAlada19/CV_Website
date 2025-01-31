document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

function highlightMGP() {
    const mgpElement = document.getElementById('mgp');
    mgpElement.classList.add('highlight');
    setTimeout(() => {
        mgpElement.classList.remove('highlight');
    }, 4000);
}