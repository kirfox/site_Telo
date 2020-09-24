'use strict';

const gallerySlider = () => {

    const slider = document.querySelector('.gallery-slider');
    const slide = document.querySelectorAll('.gallery-slider > .slide');

    let currentSlide = 0;
    let arrowRight;
    let arrowLeft;
    let spanRight;
    let spanLeft;
    let dotUl;
    let dot;
    let dotButton;
    let interval;

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

    const createDots = () => {
        dotUl = document.createElement('ul');
        dotUl.classList.add('slider-dots');
        slider.append(dotUl);

        for (let i = 0; i < slide.length; i++) {

            dot = document.createElement("li");
            dot.classList.add('dot');
            dotButton = document.createElement("button");
            dotUl.append(dot);
            dot.append(dotButton);
        }

        let ulList = dotUl.querySelectorAll('li > button');
        
        ulList[0].classList.add('slick-active');
        
        dot = document.querySelectorAll('.dot > button');

        return dot;
    };

    createDots();

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'active-slide');
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active-slide');
        nextSlide(dot, currentSlide, 'slick-active');
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    
    slider.addEventListener('click', e => {
        let target = e.target;

        if (!target.matches('.prev > span, .next > span, .dot > button')) {
            return;
        }

        prevSlide(slide, currentSlide, 'active-slide');
        prevSlide(dot, currentSlide, 'slick-active');

        if (target.matches('.prev > span')) {
            currentSlide--;
        } else if(target.matches('.next > span')){
            currentSlide++;
        } else if(target.matches('.dot > button')){

            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'active-slide');
        nextSlide(dot, currentSlide, 'slick-active');

    });

    slider.addEventListener('mouseover', (e) => {
        if (e.target.matches('.prev > span, .next > span, .dot > button')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (e) => {
        if (e.target.matches('.prev > span, .next > span, .dot > button')) {
            startSlide();
        }
    });

    startSlide(1500);
};

export default gallerySlider;