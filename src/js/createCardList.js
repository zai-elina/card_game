import { shuffle } from "./help.js";

export const createCardList = (cardsContainer, countCard) => {
    const cardSuit = ["пики", "черви", "бубны", "крести"];
    const rang = [6, 7, 8, 9, 10, "валет", "дама", "король", "туз"];
    let gameCards = [];

    for (let i = 0; i < countCard / 2; i++) {
        let obj = {};
        let suit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
        let card = rang[Math.floor(Math.random() * rang.length)];
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
    }, 3000);

    return gameCards;
};
