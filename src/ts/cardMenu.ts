import { startGame } from "./startGame";
import { renderGameMenu } from "./renderComponents";

declare global {
    interface Window {
        level: number;
    }
}

function getGameLevel(gameLevel: HTMLInputElement) {
    let countCard;

    window.level = +gameLevel.value;

    if (window.level === 1) {
        countCard = 6;
    } else if (window.level === 2) {
        countCard = 12;
    } else {
        countCard = 18;
    }

    return countCard;
}

export const createMenu = () => {
    const appHtml = document.querySelector<HTMLElement>(".app");

    if (appHtml !== null) {
        renderGameMenu(appHtml);

        const gameLevels =
            document.querySelectorAll<HTMLInputElement>(".radio-input");
        const formForLevels = document.querySelector(".complexity__form");

        formForLevels?.addEventListener("submit", () => {
            for (const gameLevel of gameLevels) {
                if (gameLevel.checked) {
                    const countCard = getGameLevel(gameLevel);
                    startGame(countCard);
                }
            }
        });
    }
};
