'use strict';

const dropdownMenu = () =>{

    document.addEventListener('click', (e) => {
        let target = e.target;

        const clubsListUl = document.querySelector('.clubs-list > ul');
        console.log(target);
        if (target !== target.closest('.clubs-list > ul') && target !== target.closest('.clubs-list > ul > li')) {
            clubsListUl.style.display = 'none';
        }
        if (target === target.closest('.clubs-list > p')) {
            clubsListUl.style.display = 'block';
        }
    });
};

export default dropdownMenu;