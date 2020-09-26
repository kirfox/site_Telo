'use strict';

const popUpWindow = () =>{

    const freeVisitForm = document.getElementById('free_visit_form');
    const callbackForm = document.getElementById('callback_form');
    const gift = document.getElementById('gift');
    const fixedGift = document.querySelector('.fixed-gift');
    const inputs = document.querySelectorAll('input');

    document.addEventListener('click', (e) => {

        let target = e.target;
        if (target === target.closest('.open-popup')) {
            freeVisitForm.style.display = 'block';
        }
        if (target === target.closest('.right > .call > .callback-btn')) {
            callbackForm.style.display = 'block';
        }
        if (target === target.closest('.fixed-gift > img')) {
            gift.style.display = 'block';
            fixedGift.style.display = 'none';
        }
        if (target === target.closest('.close_icon') || target === target.closest('.overlay')) {
            freeVisitForm.style.display = 'none';
            callbackForm.style.display = 'none';
            inputs.forEach((item) =>{
                item.value = '';
            });
        }
        if (target === target.closest('#gift > .form-wrapper > .close-form > .close_icon') || target === target.closest('#gift > .overlay') 
        || target === target.closest('#gift > .form-wrapper > .form-content  > .close-btn')) {
            gift.style.display = 'none';
        }
    });
};

export default popUpWindow;