'use strict';

const dropdownMenu = () =>{

    document.addEventListener('click', (e) => {
        let target = e.target;
        const clubsListUl = document.querySelector('.clubs-list > ul');
        if (target === target.closest('p')) {
            clubsListUl.style.display = 'block';
        }
        if (target !== target.closest('p')) {
            clubsListUl.style.display = 'none';
        }
    });
};

export default dropdownMenu;