'use strict';

const calculator = () => {

    const cardOrder = document.getElementById('card_order');
    const cardLetoMozaika = document.getElementById('card_leto_mozaika');
    const cardLetoSchelkovo = document.getElementById('card_leto_schelkovo');
    const priceTotal = document.getElementById('price-total');
    const promokod = document.getElementById('promokod');

    try {
        let price;
        let skidka;
        let oldPrice =  priceTotal.textContent  = 1999;

        const isDiscount = () => {
            skidka = Math.round(priceTotal.textContent - ((priceTotal.textContent / 100) * 30));
            if (promokod.value === 'ТЕЛО2019') {
                priceTotal.textContent = skidka;
                
            }
            if (promokod.value !== 'ТЕЛО2019'){
                oldPrice = price;
            }
        };
    
        cardOrder.addEventListener('click', (e) => {
            let inp = document.getElementsByName('card-type');
            for (var i = 0; i < inp.length; i++) {
                if (inp[i].type == "radio" && inp[i].checked) {

                    if (cardLetoMozaika.checked === true && inp[i].id === "m1") {
                        price = priceTotal.textContent = 1999; 
                        isDiscount();
                    }
                    if (cardLetoMozaika.checked === true && inp[i].id === "m2") {
                        price = priceTotal.textContent  = 9900; 
                        isDiscount();
                    }
                    if (cardLetoMozaika.checked === true && inp[i].id === "m3") {
                        price = priceTotal.textContent  = 13900; 
                        isDiscount();
                    }
                    if (cardLetoMozaika.checked === true && inp[i].id === "m4") {
                        price = priceTotal.textContent  = 19900; 
                        isDiscount();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m1") {
                        priceTotal.textContent  = 2999; 
                        isDiscount();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m2") {
                        priceTotal.textContent  = 14990; 
                        isDiscount();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m3") {
                        priceTotal.textContent  = 21990; 
                        isDiscount();
                    }
                    if (cardLetoSchelkovo.checked === true && inp[i].id === "m4") {
                        priceTotal.textContent  = 24990; 
                        isDiscount();
                    }
                }
            }
        });     
    } catch (error) {
    }
};
export default calculator;