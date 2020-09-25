'use strict';

const carousel = () => {
    const slider = document.querySelector('.services-slider');
    const test = document.querySelector('.test');
    
    let position = 0;
    let widthSlide = Math.floor(100/ 9);
    let arrowLeft;
    let arrowRight;
    let spanLeft;
    let spanRight;

    const createArrow = () => {

        arrowLeft = document.createElement("div");
        spanLeft = document.createElement('span');
        arrowRight = document.createElement("div");
        spanRight = document.createElement('span');
        arrowRight.classList.add('slider-arrow');
        arrowRight.classList.add('next');
        arrowLeft.classList.add('slider-arrow');
        arrowLeft.classList.add('prev');
        spanLeft.textContent = "<";
        spanRight.textContent = ">";

        slider.append(arrowLeft);
        arrowLeft.append(spanLeft);
        slider.append(arrowRight);
        arrowRight.append(spanRight);
    };

    createArrow();

    arrowLeft.addEventListener('click', ()=> {
        if (position > 0) {
            --position;
            test.style.transform = `translateX(-${position*widthSlide}%)`;
        }
        
    });
    arrowRight.addEventListener('click', ()=> {
        if (position < 5) {
            ++position;
            test.style.transform = `translateX(-${position*widthSlide}%)`; 
        }
    });
};

export default carousel;