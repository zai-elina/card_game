import { startGame } from "./startGame";
import { createMenu } from "./cardMenu";

export function renderGameMenu(appHtml: HTMLElement) {
    appHtml.innerHTML = `<section class="complexity">
                <h1 class="complexity__title">Выбери сложность</h1>
                <form action="" class="complexity__form">
                    <div class="complexity__levels">
                        <div class="complexity__level">
                            <input
                                type="radio"
                                name="level"
                                class="radio-input"
                                value="1"
                                id="radio1"
                            />
                            <label for="radio1">1</label>
                        </div>
                        <div class="complexity__level">
                            <input
                                type="radio"
                                name="level"
                                class="radio-input"
                                value="2"
                                id="radio2"
                            />
                            <label for="radio2">2</label>
                        </div>
                        <div class="complexity__level">
                            <input
                                type="radio"
                                name="level"
                                class="radio-input"
                                value="3"
                                id="radio3"
                            />
                            <label for="radio3">3</label>
                        </div>
                    </div>
                    <button class="complexity__button btn-start">Старт</button>
                </form>
            </section>`;
}

export function renderCardGameHeader(appHtml: HTMLElement, countCard: number) {
    appHtml.innerHTML = `<section class="cards">
                    <div class="cards__title">
                        <div class="cards__time time">
                            <div class="time__units">min</div>
                            <div class="time__units time__units--sek">sek</div>
                            <div class="time__value">
                            <div class="time__value--minutes">00</div>.
                            <div class="time__value--seconds">00</div>
                            </div>
                        </div>
                        <form action="" class="start-again">
                            <button type="submit">Начать заново</button>
                        </form>
                    </div>
                    <div class="cards__wrapper">
                    </div>
                </section>
                <div class="cards__modal modal">
                    <div class="modal__content"></div>
                </div>`;

    const restart = document.querySelector(".start-again");

    restart?.addEventListener("submit", () => {
        startGame(countCard);
    });
}

export function renderSuccessModalWindow(
    modalWindow: HTMLElement,
    secondVal: number,
    minuteVal: number
) {
    const modalContent =
        modalWindow.querySelector<HTMLElement>(".modal__content");
    modalWindow.style.display = "block";
    modalContent!.innerHTML = `<img class="modal__image" src="./static/images/success.svg" alt="">
    <div class="modal__title">Вы выиграли!</div>
    <div class="modal__time">
        <div class="modal__text"> Затраченное время:</div>
        <div class="modal__time-value">
            <div class="time__value--minutes">${
                minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal
            }</div>.
            <div class="time__value--seconds">${
                secondVal < 10 ? "0" + secondVal.toString() : secondVal
            }</div>
        </div>
    </div>
    <button class="button" id="game-again">Играть снова</button>`;
    document
        .getElementById("game-again")
        ?.addEventListener("click", () => createMenu());
}

export function renderFailModalWindow(
    modalWindow: HTMLElement,
    secondVal: number,
    minuteVal: number
) {
    const modalContent =
        modalWindow.querySelector<HTMLElement>(".modal__content");
    modalWindow.style.display = "block";
    modalContent!.innerHTML = `<img class="modal__image" src="./static/images/fail.svg" alt="">
    <div class="modal__title">Вы проиграли!</div>
    <div class="modal__time">
        <div class="modal__text"> Затраченное время:</div>
        <div class="modal__time-value">
                <div class="time__value--minutes">${
                    minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal
                }</div>.
                <div class="time__value--seconds">${
                    secondVal < 10 ? "0" + secondVal.toString() : secondVal
                }</div>
            </div>
    </div>
    <button class="button" id="game-again">Играть снова</button>`;
    document
        .getElementById("game-again")
        ?.addEventListener("click", () => createMenu());
}
