!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".top-menu"),t=document.querySelector(".head");window.matchMedia("(max-width: 768px)").matches&&window.addEventListener("scroll",(function(n){var o=e.getBoundingClientRect(),c=t.getBoundingClientRect();o.top<=0&&(e.style.position="fixed"),c.bottom>0&&(e.style.position="relative",e.style.zIndex="1")}))},c=function(){var e=document.getElementById("free_visit_form"),t=document.getElementById("callback_form"),n=document.getElementById("gift"),o=document.querySelector(".fixed-gift");document.addEventListener("click",(function(c){var l=c.target;l===l.closest(".open-popup")&&(e.style.display="block"),l===l.closest(".right > .call > .callback-btn")&&(t.style.display="block"),l===l.closest(".fixed-gift > img")&&(n.style.display="block",o.style.display="none"),l!==l.closest(".close_icon")&&l!==l.closest(".overlay")||(e.style.display="none",t.style.display="none"),l!==l.closest("#gift > .form-wrapper > .close-form > .close_icon")&&l!==l.closest("#gift > .overlay")&&l!==l.closest("#gift > .form-wrapper > .form-content  > .close-btn")||(n.style.display="none")}))},l=function(){var e=document.getElementById("totop"),t=document.querySelector(".header-main");e.style.display="none",window.addEventListener("scroll",(function(n){var o=t.getBoundingClientRect();o.bottom<0&&(e.style.display="block"),o.bottom>0&&(e.style.display="none")}))},r=function(){var e=document.querySelectorAll(".main-slider > .slide"),t=0;setInterval((function(){e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"}),2e3)},a=function(){var e,t,n,o,c=document.querySelector(".services-slider"),l=document.querySelector(".test"),r=0,a=Math.floor(100/9);e=document.createElement("div"),n=document.createElement("span"),t=document.createElement("div"),o=document.createElement("span"),t.classList.add("slider-arrow"),t.classList.add("next"),e.classList.add("slider-arrow"),e.classList.add("prev"),n.textContent="<",o.textContent=">",c.append(e),e.append(n),c.append(t),t.append(o),e.addEventListener("click",(function(){r>0&&(--r,l.style.transform="translateX(-".concat(r*a,"%)"))})),t.addEventListener("click",(function(){r<5&&(++r,l.style.transform="translateX(-".concat(r*a,"%)"))}))},s=function(){var e,t,n,o,c,l,r,a,s=document.querySelector(".gallery-slider"),i=document.querySelectorAll(".gallery-slider > .slide"),d=0;t=document.createElement("div"),o=document.createElement("span"),e=document.createElement("div"),n=document.createElement("span"),e.classList.add("slider-arrow"),e.classList.add("next"),t.classList.add("slider-arrow"),t.classList.add("prev"),o.textContent="<",n.textContent=">",s.append(t),t.append(o),s.append(e),e.append(n);!function(){(c=document.createElement("ul")).classList.add("slider-dots"),s.append(c);for(var e=0;e<i.length;e++)(l=document.createElement("li")).classList.add("dot"),r=document.createElement("button"),c.append(l),l.append(r);c.querySelectorAll("li > button")[0].classList.add("slick-active"),l=document.querySelectorAll(".dot > button")}();var u=function(e,t,n){e[t].classList.remove(n)},p=function(e,t,n){e[t].classList.add(n)},m=function(){u(i,d,"active-slide"),u(l,d,"slick-active"),++d>=i.length&&(d=0),p(i,d,"active-slide"),p(l,d,"slick-active")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;a=setInterval(m,e)};s.addEventListener("click",(function(e){var t=e.target;t.matches(".prev > span, .next > span, .dot > button")&&(u(i,d,"active-slide"),u(l,d,"slick-active"),t.matches(".prev > span")?d--:t.matches(".next > span")?d++:t.matches(".dot > button")&&l.forEach((function(e,n){e===t&&(d=n)})),d>=i.length&&(d=0),d<0&&(d=i.length-1),p(i,d,"active-slide"),p(l,d,"slick-active"))})),s.addEventListener("mouseover",(function(e){e.target.matches(".prev > span, .next > span, .dot > button")&&clearInterval(a)})),s.addEventListener("mouseout",(function(e){e.target.matches(".prev > span, .next > span, .dot > button")&&f()})),f(1500)},i=function(){var e=document.getElementById("banner-form"),t=document.getElementById("form1"),n=document.getElementById("form2"),o=document.getElementById("footer_form"),c=e.querySelectorAll("input"),l=t.querySelectorAll("input"),r=n.querySelectorAll("input"),a=o.querySelectorAll("input"),s=document.getElementById("check"),i=document.getElementById("check1"),d=document.getElementById("check2"),u=document.getElementById("footer_leto_mozaika"),p=document.getElementById("footer_leto_schelkovo"),m=e.querySelector(".personal-data"),f=t.querySelector(".personal-data"),v=n.querySelector(".personal-data"),y=o.querySelector(".choose-club"),h=document.getElementById("thanks"),g=document.querySelector("#thanks > .form-wrapper > .form-content > p");s.removeAttribute("required"),i.removeAttribute("required"),d.removeAttribute("required");var b=document.createElement("div"),E=function(){h.addEventListener("click",(function(e){var t=e.target;console.log(t),(t.closest(".overlay")||t.closest(".close_icon")||t.closest(".close-btn"))&&(h.style.display="none")}))},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if(n.checked){b.textContent="",n.checked=!1,h.style.display="block",g.textContent="Загрузка...";var r=new FormData(t),a={};r.forEach((function(e,t){a[t]=e})),x(a).then((function(e){if(200!==e.status)throw new Error("status network not 200");E(),g.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){g.textContent="Что то пошло не так...! Попробуйте позже",E()})),l.forEach((function(e){e.value=""}))}else b.textContent="Поставьте галочку на согласие обработки персональных данных",b.style="margin-top: 10px; color: white",o.append(b)};e.addEventListener("submit",(function(e){e.preventDefault(),k()})),t.addEventListener("submit",(function(e){e.preventDefault(),k(t,s,f,l)})),n.addEventListener("submit",(function(e){e.preventDefault(),k(n,d,v,r)})),o.addEventListener("submit",(function(e){if(e.preventDefault(),!0===u.checked||!0===p.checked){h.style.display="block",g.textContent="Загрузка...";var t=new FormData(o);!0===u.checked&&(t.append("club-name","Мозаика"),t.append("club-adress","Россия, Москва, 7-я Кожуховская ул.9")),!0===p.checked&&(t.append("club-name","«Щелково»"),t.append("club-adress","Россия, г. Щелково, ул. Советская, д.16"));var n={};t.forEach((function(e,t){n[t]=e})),x(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");E(),g.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){g.textContent="Что то пошло не так...! Попробуйте позже",E()})),a.forEach((function(e){e.value=""})),u.checked=!1,p.checked=!1}else b.textContent="Выберите клуб",b.style="margin-top: 10px; color: white; font-size: 20px",y.append(b)})),document.addEventListener("input",(function(e){var t=e.target;t===t.closest("#name-form")&&(t.value=t.value.replace(/[^а-я ]/gi,"")),t!==t.closest("#phone")&&t!==t.closest("#callback_form1-phone")&&t!==t.closest("#callback_footer_form-phone")&&t!==t.closest("#callback_form-phone")&&t!==t.closest("#callback_form2-phone")||(t.value=t.value.replace(/[^\+\d]/g,""))}));var x=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};(function(){var e=document.querySelector("ul");document.addEventListener("click",(function(t){var n=t.target;n.closest(".clubs-list > p")?e.classList.toggle("show"):n.closest(".clubs-list > li")||n.closest(".clubs-list > ul")?e.classList.add("show"):e.classList.remove("show")}))})(),o(),c(),l(),r(),a(),s(),i()}]);