'use strict';

const dropdownMenu = () =>{
   
    const ul = document.querySelector('ul');

    document.addEventListener('click', (e) => {
        let target = e.target;
      
        if (target.closest('.clubs-list > p')) {
            ul.classList.toggle('show');
        }
        else if(target.closest('.clubs-list > li') || target.closest('.clubs-list > ul')){
            ul.classList.add('show');
        }
        else {
            ul.classList.remove('show');
        }
    });
};

export default dropdownMenu;    