import { startGame } from "./startGame";

declare global {
    interface Window {
        level: number;
    }
}

export const createMenu = () => {
    const appHtml = document.querySelector(".app");

    if (appHtml !== null) {
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

        const gameLevels =
            document.querySelectorAll<HTMLInputElement>(".radio-input");
        const formForLevels = document.querySelector(".complexity__form");

        formForLevels?.addEventListener("submit", () => {
            for (const gameLevel of gameLevels) {
                if (gameLevel.checked) {
                    window.level = +gameLevel.value;
                    let countCard;
                    if (window.level === 1) {
                        countCard = 6;
                        startGame(countCard);
                    } else if (window.level === 2) {
                        countCard = 12;
                        startGame(countCard);
                    } else if (window.level === 3) {
                        countCard = 18;
                        startGame(countCard);
                    }
                }
            }
        });
    }
};
