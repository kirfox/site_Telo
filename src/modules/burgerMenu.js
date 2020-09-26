'use strict';

const burgerMenu = () => {
    
    const topMenu = document.querySelector('.top-menu');
    const head = document.querySelector('.head');
    const popupMenu = document.querySelector('.popup-menu');


    window.addEventListener('scroll', function(e) {
    if(window.matchMedia('(max-width: 768px)').matches) {
       
            let cordTopMenu = topMenu.getBoundingClientRect();
            let cordHead = head.getBoundingClientRect();
            if (cordTopMenu.top <= 0) {
                topMenu.style.position = 'fixed'; 
            }
            if (cordHead.bottom > 0) {
                topMenu.style.position = 'relative'; 
                topMenu.style.zIndex = "1";
            }
        }
    });

    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target.closest('.menu-button') || target.closest('.menu-button > img') ) {
            popupMenu.style.display = 'flex';
        }
        if (target.closest('.popup-menu > .close-menu-btn > img') || target.closest('.popup-menu > ul > li') ) {
            popupMenu.style.display = 'none';
        }
        console.log(target);
    });
    
};
export default burgerMenu;