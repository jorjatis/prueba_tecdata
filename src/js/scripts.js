document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.nav');
    const navToggle = nav.querySelector('.nav__toggle');

    navToggle.addEventListener('click', () => {
        const isActive = nav.classList.toggle('is-active');

        navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');

        const body = document.body;
        const bodyOverflowIsHidden = body.style.overflow === 'hidden';
        body.style.overflow = bodyOverflowIsHidden ? '' : 'hidden';
        document.documentElement.style.overflow = bodyOverflowIsHidden ? '' : 'hidden';
    });

    const btnLike = document.querySelectorAll('.btn--like');
    btnLike.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('is-liked');
        })
    });
});