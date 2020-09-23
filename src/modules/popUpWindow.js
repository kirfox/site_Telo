'use strict';

const popUpWindow = () =>{

    const freeVisitForm = document.getElementById('free_visit_form');
    const callbackForm = document.getElementById('callback_form');
    const gift = document.getElementById('gift');
    const fixedGift = document.querySelector('.fixed-gift');

    document.addEventListener('click', (e) => {

        let target = e.target;
        if (target === target.closest('.open-popup')) {
            freeVisitForm.style.display = 'block';
        }
        if (target === target.closest('#headerCallback')) {
            callbackForm.style.display = 'block';
        }
        if (target === target.closest('.fixed-gift > img')) {
            gift.style.display = 'block';
            fixedGift.style.display = 'none';
        }
        if (target === target.closest('.close_icon') || target === target.closest('.overlay') || target === target.closest('.close-btn')) {
            freeVisitForm.style.display = 'none';
            callbackForm.style.display = 'none';
            gift.style.display = 'none';
        }
        
    });
};

export default popUpWindow;