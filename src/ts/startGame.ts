import { createCardList } from "./createCardList";
import { stopTimer } from "./timer";
import {
    renderCardGameHeader,
    renderSuccessModalWindow,
    renderFailModalWindow,
} from "./renderComponents";

function finishSuccessGame() {
    const time = stopTimer();
    const secondVal = Math.floor(time) - Math.floor(time / 60) * 60;
    const minuteVal = Math.floor(time / 60);
    const modalWindow = document.querySelector<HTMLElement>(".cards__modal");
    setTimeout(() => {
        if (modalWindow) {
            renderSuccessModalWindow(modalWindow, secondVal, minuteVal);
        }
    }, 500);
}

function finishFailGame() {
    const time = stopTimer();
    const secondVal = Math.floor(time) - Math.floor(time / 60) * 60;
    const minuteVal = Math.floor(time / 60);
    const modalWindow = document.querySelector<HTMLElement>(".cards__modal");
    setTimeout(() => {
        if (modalWindow) {
            renderFailModalWindow(modalWindow, secondVal, minuteVal);
        }
    }, 500);
}

export const startGame = (countCard: number) => {
    let firstCard = -1;
    let secondCard = -1;
    let clickable = true;

    const appHtml = document.querySelector<HTMLElement>(".app");

    if (appHtml !== null) {
        renderCardGameHeader(appHtml, countCard);

        const minute = document.querySelector<HTMLElement>(
            ".time__value--minutes"
        );
        const second = document.querySelector<HTMLElement>(
            ".time__value--seconds"
        );
        const cardsContainer = document.querySelector(".cards__wrapper");

        createCardList(
            cardsContainer as HTMLElement,
            countCard,
            second as HTMLElement,
            minute as HTMLElement
        );

        const cardsList = document.querySelectorAll<HTMLElement>(".cards_item");

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
                                    finishSuccessGame();
                                }
                            }, 500);
                        } else {
                            finishFailGame();
                        }
                    }
                }
            });
        });
    }
};
