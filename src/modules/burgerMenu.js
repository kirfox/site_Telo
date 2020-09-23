'use strict';

const burgerMenu = () => {
    
    const topMenu = document.querySelector('.top-menu');
    const head = document.querySelector('.head');
    
    window.addEventListener('scroll', function() {
        let r = topMenu.getBoundingClientRect();
        let r2 = head.getBoundingClientRect();
        if (r.top <= 0) {
            topMenu.style.position = 'fixed'; 
        }
        if (r2.bottom > 0) {
            topMenu.style.position = 'relative'; 
        }
    });
};

export default burgerMenu;