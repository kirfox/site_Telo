'use strict';

const burgerMenu = () => {
    
    const topMenu = document.querySelector('.top-menu');
    const head = document.querySelector('.head');

    if(window.matchMedia('(max-width: 768px)').matches) {
        window.addEventListener('scroll', function(e) {
            let cordTopMenu = topMenu.getBoundingClientRect();
            let cordHead = head.getBoundingClientRect();
            if (cordTopMenu.top <= 0) {
                topMenu.style.position = 'fixed'; 
            }
            if (cordHead.bottom > 0) {
                topMenu.style.position = 'relative'; 
                topMenu.style.zIndex = "1";
            }
        });
    }
};
export default burgerMenu;