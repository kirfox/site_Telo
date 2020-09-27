'use strict';

const calculator = () => {

    const cardOrder = document.getElementById('card_order');
    const cardLetoMozaika = document.getElementById('card_leto_mozaika');
    const cardLetoSchelkovo = document.getElementById('card_leto_schelkovo');
    const priceTotal = document.getElementById('price-total');
    const promokod = document.getElementById('promokod');

    try {
        priceTotal.textContent  = 1999;
        let oldPrice =  priceTotal.textContent  = 1999;

        const changeOldPrice = () => {
            oldPrice = priceTotal.textContent;
        };
    
        cardOrder.addEventListener('click', (e) => {
            let inp = document.getElementsByName('card-type');
            for (var i = 0; i < inp.length; i++) {
                if (inp[i].type == "radio" && inp[i].checked) {

                    if (cardLetoMozaika.checked === true && inp[i].id === "m1") {
                        priceTotal.textContent  = 1999; 
                        changeOldPrice();
                    }
                    if (cardLetoMozaika.checked === true && inp[i].id === "m2") {
                        priceTotal.textContent  = 9900; 
                        changeOldPrice();
                    }
                    if (cardLetoMozaika.checked === true && inp[i].id === "m3") {
                        priceTotal.textContent  = 13900; 
                        changeOldPrice();
                    }
                    if (cardLetoMozaika.checked === true && inp[i].id === "m4") {
                        priceTotal.textContent  = 19900; 
                        changeOldPrice();
                    }

                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m1") {
                        priceTotal.textContent  = 2999; 
                        changeOldPrice();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m2") {
                        priceTotal.textContent  = 14990; 
                        changeOldPrice();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m3") {
                        priceTotal.textContent  = 21990; 
                        changeOldPrice();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m4") {
                        priceTotal.textContent  = 24990; 
                        changeOldPrice();
                    }
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