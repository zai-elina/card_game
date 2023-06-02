/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/scss/style.scss":(e,s,t)=>{t.r(s)},"./src/js/cardMenu.ts":(e,s,t)=>{t.r(s),t.d(s,{createMenu:()=>a});var n=t("./src/js/startGame.ts");const a=()=>{const e=document.querySelector(".app");if(null!==e){e.innerHTML='<section class="complexity">\n                <h1 class="complexity__title">Выбери сложность</h1>\n                <form action="" class="complexity__form">\n                    <div class="complexity__levels">\n                        <div class="complexity__level">\n                            <input\n                                type="radio"\n                                name="level"\n                                class="radio-input"\n                                value="1"\n                                id="radio1"\n                            />\n                            <label for="radio1">1</label>\n                        </div>\n                        <div class="complexity__level">\n                            <input\n                                type="radio"\n                                name="level"\n                                class="radio-input"\n                                value="2"\n                                id="radio2"\n                            />\n                            <label for="radio2">2</label>\n                        </div>\n                        <div class="complexity__level">\n                            <input\n                                type="radio"\n                                name="level"\n                                class="radio-input"\n                                value="3"\n                                id="radio3"\n                            />\n                            <label for="radio3">3</label>\n                        </div>\n                    </div>\n                    <button class="complexity__button btn-start">Старт</button>\n                </form>\n            </section>';const s=document.querySelectorAll(".radio-input"),t=document.querySelector(".complexity__form");null==t||t.addEventListener("submit",(()=>{for(let e of s)if(e.checked){let s;window.level=+e.value,1===window.level?(s=6,(0,n.startGame)(s)):2===window.level?(s=12,(0,n.startGame)(s)):3===window.level&&(s=18,(0,n.startGame)(s))}}))}}},"./src/js/createCardList.ts":(e,s,t)=>{t.r(s),t.d(s,{createCardList:()=>a});var n=t("./src/js/help.ts");const a=(e,s)=>{const t=["пики","черви","бубны","крести"],a=[6,7,8,9,10,"валет","дама","король","туз"];let r=[];for(let e=0;e<s/2;e++){let e={},s=t[Math.floor(Math.random()*t.length)],n=a[Math.floor(Math.random()*a.length)];e[s]=n,r.push(e),r.push(e)}r=(0,n.shuffle)(r);for(const s of r)for(const t in s)e.innerHTML+=`<div class="cards_item card" data-card = "${s[t]} ${t}">\n            <img\n                class="card__open-image"\n                src="./static/images/cards/${s[t]} ${t}.png"\n            />\n            <img\n                class="card__image hidden"\n                src="./static/images/Mask group.svg"\n                alt="Закрытая карта"\n            />\n        </div>`;const l=document.querySelectorAll(".card__image"),c=document.querySelectorAll(".card__open-image");return setTimeout((()=>{for(const e of c)e.classList.add("hidden");for(const e of l)e.classList.remove("hidden")}),3e3),r}},"./src/js/help.ts":(e,s,t)=>{t.r(s),t.d(s,{shuffle:()=>n});const n=e=>{let s,t=e.length;for(;0!==t;)s=Math.floor(Math.random()*t),t--,[e[t],e[s]]=[e[s],e[t]];return e}},"./src/js/startGame.ts":(e,s,t)=>{t.r(s),t.d(s,{startGame:()=>a});var n=t("./src/js/createCardList.ts");const a=e=>{let s=-1,t=-1,r=!0;const l=document.querySelector(".app");if(null!==l){l.innerHTML='<section class="cards">\n                    <div class="cards__title">\n                        <div class="cards__time time">\n                            <div class="time__units">min</div>\n                            <div class="time__units time__units--sek">sek</div>\n                            <div class="time__value">00.00</div>\n                        </div>\n                        <form action="" class="start-again">\n                            <button type="submit">Начать заново</button>\n                        </form>\n                    </div>\n                    <div class="cards__wrapper">\n                    </div>\n                    <div class="cards__modal>\n                    hjgjhghgh\n                    </div>\n                </section>';const c=document.querySelector(".cards__wrapper"),i=document.querySelector(".start-again");(0,n.createCardList)(c,e);const o=document.querySelectorAll(".cards_item");null==i||i.addEventListener("submit",(()=>{a(e)})),o.forEach(((n,l)=>{n.addEventListener("click",(()=>{var c,i;!0!==r||n.classList.contains("success")||(null===(c=n.querySelector(".card__open-image"))||void 0===c||c.classList.remove("hidden"),null===(i=n.querySelector(".card__image"))||void 0===i||i.classList.add("hidden"),-1===s?s=l:l!==s&&(t=l,r=!1),-1!==s&&-1!==t&&s!==t&&(o[s].dataset.card===o[t].dataset.card?setTimeout((()=>{o[s].classList.add("success"),o[t].classList.add("success"),r=!0,s=-1,t=-1,Array.from(o).every((e=>e.classList.contains("success")))&&(alert("Вы выграли!"),a(e))}),500):setTimeout((()=>{var e,n,a,l;null===(e=o[s].querySelector(".card__open-image"))||void 0===e||e.classList.add("hidden"),null===(n=o[s].querySelector(".card__image"))||void 0===n||n.classList.remove("hidden"),null===(a=o[t].querySelector(".card__open-image"))||void 0===a||a.classList.add("hidden"),null===(l=o[t].querySelector(".card__image"))||void 0===l||l.classList.remove("hidden"),r=!0,s=-1,t=-1}),500)))}))}))}}}},s={};function t(n){var a=s[n];if(void 0!==a)return a.exports;var r=s[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.d=(e,s)=>{for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};t.r(n),t("./src/scss/style.scss"),(0,t("./src/js/cardMenu.ts").createMenu)()})();
//# sourceMappingURL=bundle.js.map