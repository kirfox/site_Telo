'use strict';

const sendForm = () => {

    const form = document.getElementById('banner-form');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const footerForm = document.getElementById('footer_form');
    const cardOrder = document.getElementById('card_order');

    const input = form.querySelectorAll('input');
    const input1 = form1.querySelectorAll('input');
    const input2 = form2.querySelectorAll('input');
    const foterInput = footerForm.querySelectorAll('input');
    const cardOrderInput = cardOrder.querySelectorAll('input');
    const callbackForm1Phone = document.getElementById('callback_form1-phone');
    const callbackForm2Phone = document.getElementById('callback_form2-phone');
    const phone = document.getElementById('phone');
    
    const check = document.getElementById('check');
    const check1 = document.getElementById('check1');
    const check2 = document.getElementById('check2');
    const checkMozaika = document.getElementById('footer_leto_mozaika');
    const checkSchelkovo = document.getElementById('footer_leto_schelkovo');
    const checkCardMozaika = document.getElementById('card_leto_mozaika');
    const checkCardSchelkovo = document.getElementById('card_leto_schelkovo');
    
    const cardCheck = document.getElementById('card_check');
    
    const personalData = form.querySelector('.personal-data');
    const personalData1 = form1.querySelector('.personal-data');
    const personalData2 = form2.querySelector('.personal-data');
    const chooseClub = footerForm.querySelector('.choose-club');
    const cardOrderPersonalData = cardOrder.querySelector('.personal-data');

    const thanks = document.getElementById('thanks');
    const thanksText = document.querySelector('#thanks > .form-wrapper > .form-content > p');

    check.removeAttribute('required');
    check1.removeAttribute('required');
    check2.removeAttribute('required');
    cardCheck.removeAttribute('required');
    
    const notification = document.createElement('div');
    notification.classList.add('notification');
    const popUpThanks = () => {
        thanks.addEventListener('click', (e) => {
            let target = e.target;
            
            if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
                thanks.style.display = 'none';
            }
            
        });
        setTimeout(() => thanks.style.display= 'none', 3000);
    };

    const sendData = (data = form, checkBox = check1, addNotification = personalData, inputs = input, checkPhone = phone, formName = "Записаться на визит" ) => {
        if (checkBox.checked && (checkPhone.value.length === 12 || checkPhone.value.length === 18)) { 
            notification.textContent = '';
            checkBox.checked = false;
            thanks.style.display = 'block';
            thanksText.textContent = 'Загрузка...'; 
            
            const formData = new FormData(data);
            let body = {};
            formData.append('form_name', `${formName}`);
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
            .then((response) =>{
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                popUpThanks();
                thanksText.textContent = 'Спасибо! Мы скоро с вами свяжемся!'; 
                })
            .catch(((error) => {    
                    thanksText.textContent = 'Что то пошло не так...! Попробуйте позже';
                    popUpThanks();
                })
            );
    
            inputs.forEach((item) =>{
                item.value = '';
            });
        } 
        else { 
            notification.textContent = "Поставьте галочку на согласие обработки персональных данных или в телефоне не 11 цифр";
            notification.style = 'margin-top: 10px; color: red';
            addNotification.append(notification);
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        sendData();
    });

    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        sendData(form1, check, personalData1, input1, callbackForm1Phone);
        
    });

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        sendData(form2, check2, personalData2, input2, callbackForm2Phone, "Обратный звонок");
        
    });

    footerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const callbackFooterFormPhone = document.getElementById('callback_footer_form-phone');
        
        notification.textContent = "";
        if ((checkMozaika.checked === true || checkSchelkovo.checked === true) && 
        callbackFooterFormPhone.value.length === 12 || callbackFooterFormPhone.value.length === 18) { 
            thanks.style.display = 'block';
            thanksText.textContent = 'Загрузка...'; 
            
            const formData = new FormData(footerForm);
            if (checkMozaika.checked === true) {
                formData.append('club-name', 'Мозаика');
                formData.append('club-adress', 'Россия, Москва, 7-я Кожуховская ул.9');
            }
            if (checkSchelkovo.checked === true) {
                formData.append('club-name', '«Щелково»');
                formData.append('club-adress', 'Россия, г. Щелково, ул. Советская, д.16');
            }

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
            .then((response) =>{
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                popUpThanks();
                thanksText.textContent = 'Спасибо! Мы скоро с вами свяжемся!'; 
                })
            .catch(((error) => {    
                    thanksText.textContent = 'Что то пошло не так...! Попробуйте позже';
                    popUpThanks();
                })
            );

            foterInput.forEach((item) =>{
                item.value = '';
            });
            
            checkMozaika.checked = false;
            checkSchelkovo.checked = false;
        } else {
            notification.textContent = "Выберите клуб или введите 11 цифр в номер телефона";
            notification.style = 'margin-top: 10px; color: red; font-size: 20px';
            chooseClub.append(notification);
        }
    });

    // cardOrder.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     sendData(cardOrder, cardCheck, cardOrderPersonalData, cardOrderInput, "Забронировать карту");
        
    // });

    cardOrder.addEventListener('submit', (event) => {
        event.preventDefault();

        const callbackFormPhone = document.getElementById('callback_form-phone');

        
        notification.textContent = "";

        if (cardCheck.checked === true && (callbackFormPhone.value.length === 12 || callbackFormPhone.value.length === 18)) { 
          
            thanks.style.display = 'block';
            thanksText.textContent = 'Загрузка...'; 
            
            const formData = new FormData(cardOrder);
            try {
                if (checkCardMozaika.checked === true) {
                    formData.append('club-name', 'Мозаика');
                    formData.append('club-adress', 'Россия, Москва, 7-я Кожуховская ул.9');
                }
                if (checkCardSchelkovo.checked === true) {
                    formData.append('club-name', '«Щелково»');
                    formData.append('club-adress', 'Россия, г. Щелково, ул. Советская, д.16');
                }
            } catch (error) {
                
            }

            function check(){
                let inp = document.getElementsByName('card-type');
                for (var i = 0; i < inp.length; i++) {
                    if (inp[i].type == "radio" && inp[i].checked) {
    
                        if (inp[i].id === "t1" || inp[i].id === "m1") {
                            formData.append('card-type', '1 месяц соло');
                        }
                        if (inp[i].id === "t2" || inp[i].id === "m2") {
                            formData.append('card-type', '6 месяцев соло');
                        }
                        if (inp[i].id === "t3" || inp[i].id === "m3") {
                            formData.append('card-type', '9 месяцев соло');
                        }
                        if (inp[i].id === "t5" || inp[i].id === "m4") {
                            formData.append('card-type', '12 месяцев соло');
                        }
                        if (inp[i].id === "t4") {
                            formData.append('card-type', '12 месяцев дневная');
                        }
                    }
                }
            }
            check();

            formData.append('form_name', 'Забронировать карту')

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
            .then((response) =>{
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                popUpThanks();
                thanksText.textContent = 'Спасибо! Мы скоро с вами свяжемся!'; 
                })
            .catch(((error) => {    
                    thanksText.textContent = 'Что то пошло не так...! Попробуйте позже';
                    popUpThanks();
                })
            );

            cardOrderInput.forEach((item) =>{
                item.value = '';
            });
            
        }
        else {
            notification.textContent = "Поставьте галочку на согласие обработки персональных данных или в телефоне не 11 цифр";
            notification.style = 'margin-top: 10px; color: red';
            cardOrderPersonalData.append(notification);
        }
    });

    document.addEventListener('input', (event) =>{
        let target = event.target;
        if (target === target.closest('#name-form'))
        {
            target.value = target.value.replace(/[^а-я ]/gi, '');
        } 
        // if(target === target.closest('.mess')){
        //     target.value = target.value.replace(/[^а-я0-9.,!-? ]/gi, '');
        // }
        // if (target === target.closest('#phone') || target === target.closest('#callback_form1-phone') || 
        // target === target.closest('#callback_footer_form-phone') || target === target.closest('#callback_form-phone') || target === target.closest('#callback_form2-phone')) {
        //     target.value = target.value.replace(/[^\+\d]/g, '');
        // }
    });

    document.addEventListener('keydown', function(event) {
        let target = event.target;
        if (target === target.closest('#phone') || target === target.closest('#callback_form1-phone') || 
        target === target.closest('#callback_footer_form-phone') || target === target.closest('#callback_form-phone') || target === target.closest('#callback_form2-phone')) {
            if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab' || event.key == 'F5')) { event.preventDefault() }
            
            let mask = '+1 (111) 111-11-11'; 
        
            if (/[0-9\+\ \-\(\)]/.test(event.key)) {
                let currentString = target.value;
                let currentLength = currentString.length;
                if (/[0-9]/.test(event.key)) {

                    if (mask[currentLength] == '1') {
                        target.value = currentString + event.key;
                    } else {
                        for (let i=currentLength; i<mask.length; i++) {
                        if (mask[i] == '1') {
                            target.value = currentString + event.key;
                            break;
                        }
                        currentString += mask[i];
                        }
                    }
                }
            } 
           
        }
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;