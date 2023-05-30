import { createCardList } from "./createCardList.js";

export const startGame = (countCard) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const appHtml = document.querySelector(".app");

    appHtml.innerHTML = `<section class="cards">
                    <div class="cards__title">
                        <div class="cards__time time">
                            <div class="time__units">min</div>
                            <div class="time__units time__units--sek">sek</div>
                            <div class="time__value">00.00</div>
                        </div>
                        <form action="" class="start-again">
                            <button type="submit">Начать заново</button>
                        </form>
                    </div>
                    <div class="cards__wrapper">
                    </div>
                </section>`;

    const cardsContainer = document.querySelector(".cards__wrapper");
    const restart = document.querySelector(".start-again");
    createCardList(cardsContainer, countCard);
    const cardsList = document.querySelectorAll(".cards_item");

    restart.addEventListener("submit", () => {
        startGame(countCard);
    });

    cardsList.forEach((card, index) => {
        card.addEventListener("click", () => {
            if (clickable === true && !card.classList.contains("success")) {
                card.querySelector(".card__open-image").classList.remove(
                    "hidden"
                );
                card.querySelector(".card__image").classList.add("hidden");

                if (firstCard === null) {
                    firstCard = index;
                } else if (index !== firstCard) {
                    secondCard = index;
                    clickable = false;
                }

                if (
                    firstCard !== null &&
                    secondCard !== null &&
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
                            firstCard = null;
                            secondCard = null;
                            if (
                                Array.from(cardsList).every((card) =>
                                    card.classList.contains("success")
                                )
                            ) {
                                alert("Вы выграли!");
                                startGame(countCard);
                            }
                        }, 500);
                    } else {
                        setTimeout(() => {
                            cardsList[firstCard]
                                .querySelector(".card__open-image")
                                .classList.add("hidden");
                            cardsList[firstCard]
                                .querySelector(".card__image")
                                .classList.remove("hidden");
                            cardsList[secondCard]
                                .querySelector(".card__open-image")
                                .classList.add("hidden");
                            cardsList[secondCard]
                                .querySelector(".card__image")
                                .classList.remove("hidden");

                            clickable = true;
                            firstCard = null;
                            secondCard = null;
                        }, 500);
                    }
                }
            }
        });
    });
};
