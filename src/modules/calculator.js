'use strict';

const calculator = () => {

    // const time = document.querySelector('.time');
    
    const cardOrder = document.getElementById('card_order');
    const cardLetoMozaika = document.getElementById('card_leto_mozaika');
    const cardLetoSchelkovo = document.getElementById('card_leto_schelkovo');
    const priceTotal = document.getElementById('price-total');
    const promokod = document.getElementById('promokod');

    try {
        priceTotal.textContent  = 1999;
        let oldPrice;
        cardOrder.addEventListener('click', (e) => {
            let target = e.target;
            
            if (cardLetoMozaika.checked === true) {
                if (target.closest('#m1') || target.closest('#card_leto_mozaika') ) {
                    priceTotal.textContent  = 1999; 
                    oldPrice = priceTotal.textContent;
                }
                if (target.closest('#m2') || target.closest('#card_leto_mozaika') ) {
                    priceTotal.textContent  = 9900; 
                    oldPrice = priceTotal.textContent;
                }
                if (target.closest('#m3') || target.closest('#card_leto_mozaika')) {
                    priceTotal.textContent  = 13900; 
                    oldPrice = priceTotal.textContent;  
                }
                if (target.closest('#m4') || target.closest('#card_leto_mozaika')) {
                    priceTotal.textContent  = 19900;
                    oldPrice = priceTotal.textContent;
                }
            }
    
            if (cardLetoSchelkovo.checked === true) {
           
                if (target.closest('#m1') || target.closest('#card_leto_schelkovo')) {
                    priceTotal.textContent  = 2999;
                    oldPrice = priceTotal.textContent;
                }
                if (target.closest('#m2') || target.closest('#card_leto_schelkovo')) {
                    priceTotal.textContent  = 14990;
                    oldPrice = priceTotal.textContent;
                }
                if (target.closest('#m3') || target.closest('#card_leto_schelkovo'))  {
                    priceTotal.textContent  = 21990;
                    oldPrice = priceTotal.textContent;
                }
                if (target.closest('#m4') || target.closest('#card_leto_schelkovo'))  {
                    priceTotal.textContent  = 24990;
                    oldPrice = priceTotal.textContent;
                }
            }  
    
        });
        promokod.value.toString().trim();
        promokod.addEventListener('input', () => {
            
            if (promokod.value === 'ТЕЛО2019') {
                let newPrice;
                newPrice = Math.round(priceTotal.textContent - ((priceTotal.textContent / 100) * 30));    
                priceTotal.textContent = newPrice;
                
            }
            else{
                priceTotal.textContent = oldPrice;
            }
        });

    } catch (error) {
    
    }
    
};

export default calculator;