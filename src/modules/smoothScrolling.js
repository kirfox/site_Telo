'use strict';

const smoothScrolling = () => {
    const menu = document.querySelector('.top-menu');
    const anchors = menu.querySelectorAll('li a[href*="#"]');
    const arrow = document.getElementById('totop');
    const popUp = document.querySelector('.popup-menu');
    const popUpAnchors = popUp.querySelectorAll('li a[href*="#"]');

    const func = (anchorses = anchors) => {
        for (let anchor of anchorses) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const blockID = anchor.getAttribute('href').substr(1);
                
                document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                });
            });
        }
    };
    func();
    func(popUpAnchors);

    arrow.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = arrow.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
};

export default smoothScrolling;