'use strict';

const carousel = () => {
    const slider = document.querySelector('.services-slider');
    const test = document.querySelector('.test');
    const slide = document.querySelectorAll('.services-slider > .slide');
    const prev = document.querySelector('.services-slider > .prev');
    const next = document.querySelector('.services-slider > .next');
  
    let position = 0;
    // let width = 211;
    let widthSlide = Math.floor(100/ 4);


    prev.addEventListener('click', ()=> {
        if (position > 0) {
        --position;
        console.log(position);
        test.style.transform = `translateX(-${position*widthSlide}%)`;
        }
        
    });
    next.addEventListener('click', ()=> {
        if (position < 5) {
            ++position;
            console.log(position);
            test.style.transform = `translateX(-${position*widthSlide}%)`; 
        }

        
    });

  
};

export default carousel;