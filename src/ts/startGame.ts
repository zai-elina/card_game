import { createMenu } from "./cardMenu";
import { createCardList } from "./createCardList";
import { stopTimer } from "./timer";

export const startGame = (countCard: number) => {
    let firstCard = -1;
    let secondCard = -1;
    let clickable = true;

    const appHtml = document.querySelector(".app");

    if (appHtml !== null) {
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

        const cardsContainer = document.querySelector(".cards__wrapper");
        const restart = document.querySelector(".start-again");
        const minute = document.querySelector<HTMLElement>(
            ".time__value--minutes"
        );
        const second = document.querySelector<HTMLElement>(
            ".time__value--seconds"
        );
        createCardList(
            cardsContainer as HTMLElement,
            countCard,
            second as HTMLElement,
            minute as HTMLElement
        );
        const cardsList = document.querySelectorAll<HTMLElement>(".cards_item");
        const modalWindow =
            document.querySelector<HTMLElement>(".cards__modal");

        restart?.addEventListener("submit", () => {
            startGame(countCard);
        });

        cardsList.forEach((card, index) => {
            card.addEventListener("click", () => {
                if (clickable === true && !card.classList.contains("success")) {
                    card.querySelector(".card__open-image")?.classList.remove(
                        "hidden"
                    );
                    card.querySelector(".card__image")?.classList.add("hidden");

                    if (firstCard === -1) {
                        firstCard = index;
                    } else if (index !== firstCard) {
                        secondCard = index;
                        clickable = false;
                    }

                    if (
                        firstCard !== -1 &&
                        secondCard !== -1 &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardsList[firstCard].dataset.card ===
                            cardsList[secondCard].dataset.card
                        ) {
                            setTimeout(() => {
                                cardsList[firstCard].classList.add("success");
                                cardsList[secondCard].classList.add("success");
                                clickable = true;
                                firstCard = -1;
                                secondCard = -1;
                                if (
                                    Array.from(cardsList).every((card) =>
                                        card.classList.contains("success")
                                    )
                                ) {
                                    const time = stopTimer();
                                    const secondVal =
                                        Math.floor(time) -
                                        Math.floor(time / 60) * 60;
                                    const minuteVal = Math.floor(time / 60);
                                    if (modalWindow) {
                                        const modalContent =
                                            modalWindow.querySelector<HTMLElement>(
                                                ".modal__content"
                                            );
                                        modalWindow.style.display = "block";
                                        modalContent!.innerHTML = `<img class="modal__image" src="./static/images/success.svg" alt="">
                                        <div class="modal__title">Вы выиграли!</div>
                                        <div class="modal__time">
                                            <div class="modal__text"> Затраченное время:</div>
                                            <div class="modal__time-value">
                                                <div class="time__value--minutes">${
                                                    minuteVal < 10
                                                        ? "0" +
                                                          minuteVal.toString()
                                                        : minuteVal
                                                }</div>.
                                                <div class="time__value--seconds">${
                                                    secondVal < 10
                                                        ? "0" +
                                                          secondVal.toString()
                                                        : secondVal
                                                }</div>
                                            </div>
                                        </div>
                                        <button class="button" id="game-again">Играть снова</button>`;
                                        document
                                            .getElementById("game-again")
                                            ?.addEventListener("click", () =>
                                                createMenu()
                                            );
                                    }
                                }
                            }, 500);
                        } else {
                            const time = stopTimer();
                            const secondVal =
                                Math.floor(time) - Math.floor(time / 60) * 60;
                            const minuteVal = Math.floor(time / 60);
                            setTimeout(() => {
                                if (modalWindow) {
                                    const modalContent =
                                        modalWindow.querySelector<HTMLElement>(
                                            ".modal__content"
                                        );
                                    modalWindow.style.display = "block";
                                    modalContent!.innerHTML = `<img class="modal__image" src="./static/images/fail.svg" alt="">
                                    <div class="modal__title">Вы проиграли!</div>
                                    <div class="modal__time">
                                        <div class="modal__text"> Затраченное время:</div>
                                        <div class="modal__time-value">
                                                <div class="time__value--minutes">${
                                                    minuteVal < 10
                                                        ? "0" +
                                                          minuteVal.toString()
                                                        : minuteVal
                                                }</div>.
                                                <div class="time__value--seconds">${
                                                    secondVal < 10
                                                        ? "0" +
                                                          secondVal.toString()
                                                        : secondVal
                                                }</div>
                                            </div>
                                    </div>
                                    <button class="button" id="game-again">Играть снова</button>`;
                                    document
                                        .getElementById("game-again")
                                        ?.addEventListener("click", () =>
                                            createMenu()
                                        );
                                }
                            }, 500);
                        }
                    }
                }
            });
        });
    }
};
