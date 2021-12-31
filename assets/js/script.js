'use strict';

const list = document.querySelectorAll('.list');

list.forEach((el, idx) => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('active');

        const span = el.querySelectorAll('div span');
        span.forEach((el, idx) => {
            el.style.transform = 'translatey(-100%)';
            el.style.transition = 'transform .7s ease';
            el.style.transitionDelay = `${idx * .05}s`;
        })
    });
 
    el.addEventListener('mouseleave', () => {
        el.classList.add('active');

        const span = el.querySelectorAll('div span');
        span.forEach((el, idx) => {
            el.style.transform = 'translatey(0%)';
            el.style.transition = 'transform .7s ease';
            el.style.transitionDelay = `${idx * .02}s`;
        })
    });
});