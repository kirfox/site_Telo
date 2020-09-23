'use strict';

const arrow = () => {
 
    const totop = document.getElementById('totop');
    const headSlider = document.querySelector('.header-main');
    
    totop.style.display = 'none';

    window.addEventListener('scroll', function(e) {
        let cordHeadSlider = headSlider.getBoundingClientRect();

        if (cordHeadSlider.bottom < 0) {
            totop.style.display = 'block';
        }
        console.log(cordHeadSlider.bottom);
    });
};

export default arrow;