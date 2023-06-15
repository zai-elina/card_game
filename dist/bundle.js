/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/scss/style.scss":(e,t,s)=>{s.r(t)},"./src/js/cardMenu.ts":(e,t,s)=>{s.r(t),s.d(t,{createMenu:()=>a});var n=s("./src/js/startGame.ts");const a=()=>{const e=document.querySelector(".app");if(null!==e){e.innerHTML='<section class="complexity">\n                <h1 class="complexity__title">Выбери сложность</h1>\n                <form action="" class="complexity__form">\n                    <div class="complexity__levels">\n                        <div class="complexity__level">\n                            <input\n                                type="radio"\n                                name="level"\n                                class="radio-input"\n                                value="1"\n                                id="radio1"\n                            />\n                            <label for="radio1">1</label>\n                        </div>\n                        <div class="complexity__level">\n                            <input\n                                type="radio"\n                                name="level"\n                                class="radio-input"\n                                value="2"\n                                id="radio2"\n                            />\n                            <label for="radio2">2</label>\n                        </div>\n                        <div class="complexity__level">\n                            <input\n                                type="radio"\n                                name="level"\n                                class="radio-input"\n                                value="3"\n                                id="radio3"\n                            />\n                            <label for="radio3">3</label>\n                        </div>\n                    </div>\n                    <button class="complexity__button btn-start">Старт</button>\n                </form>\n            </section>';const t=document.querySelectorAll(".radio-input"),s=document.querySelector(".complexity__form");null==s||s.addEventListener("submit",(()=>{for(let e of t)if(e.checked){let t;window.level=+e.value,1===window.level?(t=6,(0,n.startGame)(t)):2===window.level?(t=12,(0,n.startGame)(t)):3===window.level&&(t=18,(0,n.startGame)(t))}}))}}},"./src/js/createCardList.ts":(e,t,s)=>{s.r(t),s.d(t,{createCardList:()=>i});var n=s("./src/js/help.ts"),a=s("./src/js/timer.ts");const i=(e,t,s,i)=>{const l=["spades","hearts","diamonds","crosses"],r=[6,7,8,9,10,"jack","queen","king","ace"];let o=[];for(let e=0;e<t/2;e++){let e={},t=l[Math.floor(Math.random()*l.length)],s=r[Math.floor(Math.random()*r.length)];e[t]=s,o.push(e),o.push(e)}o=(0,n.shuffle)(o);for(const t of o)for(const s in t)e.innerHTML+=`<div class="cards_item card" data-card = "${t[s]} ${s}">\n            <img\n                class="card__open-image"\n                src="./static/images/cards/${t[s]} ${s}.png"\n            />\n            <img\n                class="card__image hidden"\n                src="./static/images/Mask group.svg"\n                alt="Закрытая карта"\n            />\n        </div>`;const c=document.querySelectorAll(".card__image"),d=document.querySelectorAll(".card__open-image");return setTimeout((()=>{for(const e of d)e.classList.add("hidden");for(const e of c)e.classList.remove("hidden");null!==s&&null!==i&&(0,a.startTimer)(s,i)}),3e3),o}},"./src/js/help.ts":(e,t,s)=>{s.r(t),s.d(t,{shuffle:()=>n});const n=e=>{let t,s=e.length;for(;0!==s;)t=Math.floor(Math.random()*s),s--,[e[s],e[t]]=[e[t],e[s]];return e}},"./src/js/startGame.ts":(e,t,s)=>{s.r(t),s.d(t,{startGame:()=>l});var n=s("./src/js/cardMenu.ts"),a=s("./src/js/createCardList.ts"),i=s("./src/js/timer.ts");const l=e=>{let t=-1,s=-1,r=!0;const o=document.querySelector(".app");if(null!==o){o.innerHTML='<section class="cards">\n                    <div class="cards__title">\n                        <div class="cards__time time">\n                            <div class="time__units">min</div>\n                            <div class="time__units time__units--sek">sek</div>\n                            <div class="time__value">\n                            <div class="time__value--minutes">00</div>.\n                            <div class="time__value--seconds">00</div>\n                            </div>\n                        </div>\n                        <form action="" class="start-again">\n                            <button type="submit">Начать заново</button>\n                        </form>\n                    </div>\n                    <div class="cards__wrapper">\n                    </div>\n                </section>\n                <div class="cards__modal modal">\n                    <div class="modal__content"></div>\n                </div>';const c=document.querySelector(".cards__wrapper"),d=document.querySelector(".start-again"),m=document.querySelector(".time__value--minutes"),u=document.querySelector(".time__value--seconds");(0,a.createCardList)(c,e,u,m);const v=document.querySelectorAll(".cards_item"),_=document.querySelector(".cards__modal");null==d||d.addEventListener("submit",(()=>{l(e)})),v.forEach(((e,a)=>{e.addEventListener("click",(()=>{var l,o;if(!0===r&&!e.classList.contains("success")&&(null===(l=e.querySelector(".card__open-image"))||void 0===l||l.classList.remove("hidden"),null===(o=e.querySelector(".card__image"))||void 0===o||o.classList.add("hidden"),-1===t?t=a:a!==t&&(s=a,r=!1),-1!==t&&-1!==s&&t!==s))if(v[t].dataset.card===v[s].dataset.card)setTimeout((()=>{var e;if(v[t].classList.add("success"),v[s].classList.add("success"),r=!0,t=-1,s=-1,Array.from(v).every((e=>e.classList.contains("success")))){let t=(0,i.stopTimer)(),s=Math.floor(t)-60*Math.floor(t/60),a=Math.floor(t/60);if(_){const t=_.querySelector(".modal__content");_.style.display="block",t.innerHTML=`<img class="modal__image" src="./static/images/success.svg" alt="">\n                                        <div class="modal__title">Вы выиграли!</div>\n                                        <div class="modal__time">\n                                            <div class="modal__text"> Затраченное время:</div>\n                                            <div class="modal__time-value">\n                                                <div class="time__value--minutes">${a<10?"0"+a.toString():a}</div>.\n                                                <div class="time__value--seconds">${s<10?"0"+s.toString():s}</div>\n                                            </div>\n                                        </div>\n                                        <button class="button" id="game-again">Играть снова</button>`,null===(e=document.getElementById("game-again"))||void 0===e||e.addEventListener("click",(()=>(0,n.createMenu)()))}}}),500);else{let e=(0,i.stopTimer)(),t=Math.floor(e)-60*Math.floor(e/60),s=Math.floor(e/60);setTimeout((()=>{var e;if(_){const a=_.querySelector(".modal__content");_.style.display="block",a.innerHTML=`<img class="modal__image" src="./static/images/fail.svg" alt="">\n                                    <div class="modal__title">Вы проиграли!</div>\n                                    <div class="modal__time">\n                                        <div class="modal__text"> Затраченное время:</div>\n                                        <div class="modal__time-value">\n                                                <div class="time__value--minutes">${s<10?"0"+s.toString():s}</div>.\n                                                <div class="time__value--seconds">${t<10?"0"+t.toString():t}</div>\n                                            </div>\n                                    </div>\n                                    <button class="button" id="game-again">Играть снова</button>`,null===(e=document.getElementById("game-again"))||void 0===e||e.addEventListener("click",(()=>(0,n.createMenu)()))}}),500)}}))}))}}},"./src/js/timer.ts":(e,t,s)=>{s.r(t),s.d(t,{startTimer:()=>l,stopTimer:()=>i});let n,a=0;function i(){let e=a;return a=0,clearInterval(n),e}function l(e,t){i();let s=0,l=0;n=setInterval((function(){a+=1,s=Math.floor(a)-60*Math.floor(a/60),l=Math.floor(a/60),e.innerHTML=String(s<10?"0"+s.toString():s),t.innerHTML=String(l<10?"0"+l.toString():l)}),1e3)}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};s.r(n),s("./src/scss/style.scss"),(0,s("./src/js/cardMenu.ts").createMenu)()})();
//# sourceMappingURL=bundle.js.map