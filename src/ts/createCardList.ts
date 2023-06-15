import { shuffle } from "./help";
import { startTimer } from "./timer";

export const createCardList = (
    cardsContainer: HTMLElement,
    countCard: number,
    second: HTMLElement,
    minute: HTMLElement
) => {
    const cardSuit = ["spades", "hearts", "diamonds", "crosses"];
    const rang = [6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];
    let gameCards: { [key: string]: string | number }[] = [];

    for (let i = 0; i < countCard / 2; i++) {
        const obj: { [key: string]: string | number } = {};
        let suit: string;
        let card: string | number;
        do {
            suit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
            card = rang[Math.floor(Math.random() * rang.length)];
        } while (
            gameCards.some(
                (item) =>
                    Object.values(item)[0] === card &&
                    Object.keys(item)[0] === suit
            )
        );
        obj[suit] = card;
        gameCards.push(obj);
        gameCards.push(obj);
    }

    gameCards = shuffle(gameCards);

    for (const card of gameCards) {
        for (const key in card) {
            cardsContainer.innerHTML += `<div class="cards_item card" data-card = "${card[key]} ${key}">
            <img
                class="card__open-image"
                src="./static/images/cards/${card[key]} ${key}.png"
            />
            <img
                class="card__image hidden"
                src="./static/images/Mask group.svg"
                alt="Закрытая карта"
            />
        </div>`;
        }
    }

    const closedCards = document.querySelectorAll(".card__image");
    const openCards = document.querySelectorAll(".card__open-image");

    setTimeout(() => {
        for (const openCard of openCards) {
            openCard.classList.add("hidden");
        }
        for (const closeCard of closedCards) {
            closeCard.classList.remove("hidden");
        }
        if (second !== null && minute !== null) {
            startTimer(second, minute);
        }
    }, 3000);
};
