!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".top-menu"),t=document.querySelector(".head"),n=document.querySelector(".popup-menu");window.addEventListener("scroll",(function(n){if(window.matchMedia("(max-width: 768px)").matches){var o=e.getBoundingClientRect(),c=t.getBoundingClientRect();o.top<=0&&(e.style.position="fixed"),c.bottom>0&&(e.style.position="relative",e.style.zIndex="1")}})),document.addEventListener("click",(function(e){var t=e.target;(t.closest(".menu-button")||t.closest(".menu-button > img"))&&(n.style.display="flex"),(t.closest(".popup-menu > .close-menu-btn > img")||t.closest(".popup-menu > ul > li"))&&(n.style.display="none")}))},c=function(){var e=document.getElementById("free_visit_form"),t=document.getElementById("callback_form"),n=document.getElementById("gift"),o=document.querySelector(".fixed-gift"),c=document.querySelectorAll("input"),l=document.getElementById("check2"),a=document.getElementById("check");document.addEventListener("click",(function(r){var d=r.target;(d===d.closest(".open-popup")&&(e.style.display="block"),d===d.closest(".right > .call > .callback-btn")&&(t.style.display="block"),d===d.closest(".fixed-gift > img")&&(n.style.display="block",o.style.display="none"),d===d.closest(".close_icon")||d===d.closest(".overlay"))&&(e.style.display="none",t.style.display="none",a.checked=!1,l.checked=!1,document.querySelectorAll(".notification").forEach((function(e){e.textContent=""})),c.forEach((function(e){e.value=""})));d!==d.closest("#gift > .form-wrapper > .close-form > .close_icon")&&d!==d.closest("#gift > .overlay")&&d!==d.closest("#gift > .form-wrapper > .form-content  > .close-btn")||(n.style.display="none")}))},l=function(){var e=document.getElementById("totop"),t=document.querySelector(".header-main");e.style.display="none",window.addEventListener("scroll",(function(n){var o=t.getBoundingClientRect();o.bottom<0&&(e.style.display="block"),o.bottom>0&&(e.style.display="none")}))},a=function(){var e=document.querySelectorAll(".main-slider > .slide"),t=0;setInterval((function(){e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"}),2e3)},r=function(){var e,t,n,o,c=document.querySelector(".services-slider"),l=document.querySelector(".test"),a=0,r=Math.floor(100/9);e=document.createElement("div"),n=document.createElement("span"),t=document.createElement("div"),o=document.createElement("span"),t.classList.add("slider-arrow"),t.classList.add("next"),e.classList.add("slider-arrow"),e.classList.add("prev"),n.textContent="<",o.textContent=">",c.append(e),e.append(n),c.append(t),t.append(o),e.addEventListener("click",(function(){a>0&&(--a,l.style.transform="translateX(-".concat(a*r,"%)"))})),t.addEventListener("click",(function(){a<5&&(++a,l.style.transform="translateX(-".concat(a*r,"%)"))}))},d=function(){var e,t,n,o,c,l,a,r,d=document.querySelector(".gallery-slider"),i=document.querySelectorAll(".gallery-slider > .slide"),s=0;t=document.createElement("div"),o=document.createElement("span"),e=document.createElement("div"),n=document.createElement("span"),e.classList.add("slider-arrow"),e.classList.add("next"),t.classList.add("slider-arrow"),t.classList.add("prev"),o.textContent="<",n.textContent=">",d.append(t),t.append(o),d.append(e),e.append(n);!function(){(c=document.createElement("ul")).classList.add("slider-dots"),d.append(c);for(var e=0;e<i.length;e++)(l=document.createElement("li")).classList.add("dot"),a=document.createElement("button"),c.append(l),l.append(a);c.querySelectorAll("li > button")[0].classList.add("slick-active"),l=document.querySelectorAll(".dot > button")}();var u=function(e,t,n){e[t].classList.remove(n)},m=function(e,t,n){e[t].classList.add(n)},p=function(){u(i,s,"active-slide"),u(l,s,"slick-active"),++s>=i.length&&(s=0),m(i,s,"active-slide"),m(l,s,"slick-active")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;r=setInterval(p,e)};d.addEventListener("click",(function(e){var t=e.target;t.matches(".prev > span, .next > span, .dot > button")&&(u(i,s,"active-slide"),u(l,s,"slick-active"),t.matches(".prev > span")?s--:t.matches(".next > span")?s++:t.matches(".dot > button")&&l.forEach((function(e,n){e===t&&(s=n)})),s>=i.length&&(s=0),s<0&&(s=i.length-1),m(i,s,"active-slide"),m(l,s,"slick-active"))})),d.addEventListener("mouseover",(function(e){e.target.matches(".prev > span, .next > span, .dot > button")&&clearInterval(r)})),d.addEventListener("mouseout",(function(e){e.target.matches(".prev > span, .next > span, .dot > button")&&f()})),f(1500)},i=function(){var e=document.getElementById("card_order"),t=document.getElementById("card_leto_mozaika"),n=document.getElementById("card_leto_schelkovo"),o=document.getElementById("price-total"),c=document.getElementById("promokod");try{var l,a;o.textContent=1999;o.textContent;var r=function(){a=Math.round(o.textContent-o.textContent/100*30),"ТЕЛО2019"===c.value&&(o.textContent=a),"ТЕЛО2019"!==c.value&&l};e.addEventListener("click",(function(e){for(var c=document.getElementsByName("card-type"),a=0;a<c.length;a++)"radio"==c[a].type&&c[a].checked&&(!0===t.checked&&"m1"===c[a].id&&(l=o.textContent=1999,r()),!0===t.checked&&"m2"===c[a].id&&(l=o.textContent=9900,r()),!0===t.checked&&"m3"===c[a].id&&(l=o.textContent=13900,r()),!0===t.checked&&"m4"===c[a].id&&(l=o.textContent=19900,r()),!0===n.checked&&"m1"===c[a].id&&(l=o.textContent=2999,r()),!0===n.checked&&"m2"===c[a].id&&(l=o.textContent=14990,r()),!0===n.checked&&"m3"===c[a].id&&(l=o.textContent=21990,r()),!0===n.checked&&"m4"===c[a].id&&(l=o.textContent=24990,r()))})),c.addEventListener("input",(function(){o.textContent,o.textContent="ТЕЛО2019"===c.value?a:l}))}catch(e){}},s=function(){var e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form"),n=document.getElementById("banner-form"),o=document.getElementById("form1"),c=document.getElementById("form2"),l=document.getElementById("footer_form"),a=document.getElementById("card_order"),r=n.querySelectorAll("input"),d=o.querySelectorAll("input"),i=c.querySelectorAll("input"),s=l.querySelectorAll("input"),u=a.querySelectorAll("input"),m=document.getElementById("callback_form1-phone"),p=document.getElementById("callback_form2-phone"),f=document.getElementById("phone"),y=document.getElementById("check"),v=document.getElementById("check1"),h=document.getElementById("check2"),g=document.getElementById("footer_leto_mozaika"),k=document.getElementById("footer_leto_schelkovo"),E=document.getElementById("card_leto_mozaika"),b=document.getElementById("card_leto_schelkovo"),x=document.getElementById("card_check"),C=n.querySelector(".personal-data"),_=o.querySelector(".personal-data"),B=c.querySelector(".personal-data"),I=l.querySelector(".choose-club"),L=a.querySelector(".personal-data"),w=document.getElementById("thanks"),S=document.querySelector("#thanks > .form-wrapper > .form-content > p");y.removeAttribute("required"),v.removeAttribute("required"),h.removeAttribute("required"),x.removeAttribute("required");var q=document.createElement("div");q.classList.add("notification");var A=function(){w.addEventListener("click",(function(e){var t=e.target;(t.closest(".overlay")||t.closest(".close_icon")||t.closest(".close-btn"))&&(w.style.display="none")})),setTimeout((function(){return w.style.display="none"}),3e3)},D=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:f,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Записаться на визит";if(!c.checked||12!==d.value.length&&18!==d.value.length)q.textContent="Поставьте галочку на согласие обработки персональных данных",q.style="margin-top: 10px; color: red",l.append(q);else{q.textContent="",c.checked=!1,w.style.display="block",S.textContent="Загрузка...";var s=new FormData(o),u={};s.append("form_name","".concat(i)),s.forEach((function(e,t){u[t]=e})),O(u).then((function(e){if(200!==e.status)throw new Error("status network not 200");A(),S.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){S.textContent="Что то пошло не так...! Попробуйте позже",A()})),a.forEach((function(e){e.value=""})),e.style.display="none",t.style.display="none"}};n.addEventListener("submit",(function(e){e.preventDefault(),D()})),o.addEventListener("submit",(function(e){e.preventDefault(),D(o,y,_,d,m,"Обратный звонок")})),c.addEventListener("submit",(function(e){e.preventDefault(),D(c,h,B,i,p)})),l.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("callback_footer_form-phone");if((!0===g.checked||!0===k.checked)&&12===t.value.length||18===t.value.length){q.textContent="",w.style.display="block",S.textContent="Загрузка...";var n=new FormData(l);!0===g.checked&&(n.append("club-name","Мозаика"),n.append("club-adress","Россия, Москва, 7-я Кожуховская ул.9")),!0===k.checked&&(n.append("club-name","«Щелково»"),n.append("club-adress","Россия, г. Щелково, ул. Советская, д.16"));var o={};n.forEach((function(e,t){o[t]=e})),O(o).then((function(e){if(200!==e.status)throw new Error("status network not 200");A(),S.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){S.textContent="Что то пошло не так...! Попробуйте позже",A()})),s.forEach((function(e){e.value=""}))}else q.textContent="Введите корректный номер телефона",q.style="margin-top: 10px; color: red; font-size: 20px",I.append(q)})),a.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("callback_form-phone"),n=document.getElementById("promokod"),o=document.getElementById("price-total");if(!0!==x.checked||12!==t.value.length&&18!==t.value.length)q.textContent="Поставьте галочку на согласие обработки персональных данных",q.style="margin-top: 10px; color: red",L.append(q);else{q.textContent="",x.checked=!1,w.style.display="block",S.textContent="Загрузка...";var c=new FormData(a);try{!0===E.checked&&(c.append("club-name","Мозаика"),c.append("club-adress","Россия, Москва, 7-я Кожуховская ул.9")),!0===b.checked&&(c.append("club-name","«Щелково»"),c.append("club-adress","Россия, г. Щелково, ул. Советская, д.16"))}catch(e){}!function(){for(var e=document.getElementsByName("card-type"),t=0;t<e.length;t++)"radio"==e[t].type&&e[t].checked&&("t1"!==e[t].id&&"m1"!==e[t].id||c.append("card-type","1 месяц соло"),"t2"!==e[t].id&&"m2"!==e[t].id||c.append("card-type","6 месяцев соло"),"t3"!==e[t].id&&"m3"!==e[t].id||c.append("card-type","9 месяцев соло"),"t5"!==e[t].id&&"m4"!==e[t].id||c.append("card-type","12 месяцев соло"),"t4"===e[t].id&&c.append("card-type","12 месяцев дневная"))}(),c.append("form_name","Забронировать карту");try{if("ТЕЛО2019"===n.value){for(var l=o.textContent,r=document.getElementsByName("card-type"),d=0;d<r.length;d++)"radio"==r[d].type&&r[d].checked&&(!0===E.checked&&"m1"===r[d].id&&(o.textContent=1999),!0===E.checked&&"m2"===r[d].id&&(o.textContent=9900),!0===E.checked&&"m3"===r[d].id&&(o.textContent=13900),!0===E.checked&&"m4"===r[d].id&&(o.textContent=19900),!0===b.checked&&"m1"===r[d].id&&(o.textContent=2999),!0===b.checked&&"m2"===r[d].id&&(o.textContent=14990),!0===b.checked&&"m3"===r[d].id&&(o.textContent=21990),!0===b.checked&&"m4"===r[d].id&&(o.textContent=24990));c.append("price with promokod","".concat(l))}}catch(e){console.log(e)}var i={};c.forEach((function(e,t){i[t]=e})),O(i).then((function(e){if(200!==e.status)throw new Error("status network not 200");A(),S.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){S.textContent="Что то пошло не так...! Попробуйте позже",A()})),u.forEach((function(e){e.value=""}))}})),document.addEventListener("input",(function(e){var t=e.target;t===t.closest("#name-form")&&(t.value=t.value.replace(/[^а-я ]/gi,""))})),document.addEventListener("keydown",(function(e){var t=e.target;if(t===t.closest("#phone")||t===t.closest("#callback_form1-phone")||t===t.closest("#callback_footer_form-phone")||t===t.closest("#callback_form-phone")||t===t.closest("#callback_form2-phone")){"ArrowLeft"!=e.key&&"ArrowRight"!=e.key&&"Backspace"!=e.key&&"Tab"!=e.key&&"F5"!=e.key&&e.preventDefault();var n="+1 (111) 111-11-11";if(/[0-9\+\ \-\(\)]/.test(e.key)){var o=t.value,c=o.length;if(/[0-9]/.test(e.key))if("1"==n[c])t.value=o+e.key;else for(var l=c;l<n.length;l++){if("1"==n[l]){t.value=o+e.key;break}o+=n[l]}}}}));var O=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};(function(){var e=document.querySelector("ul");document.addEventListener("click",(function(t){var n=t.target;n.closest(".clubs-list > p")?e.classList.toggle("show"):n.closest(".clubs-list > li")||n.closest(".clubs-list > ul")?e.classList.add("show"):e.classList.remove("show")}))})(),o(),c(),l(),a(),r(),d(),i(),s()}]);