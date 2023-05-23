const gameLevels = document.querySelectorAll(".radio-input");
const formForLevels = document.querySelector(".complexity__form");

formForLevels.addEventListener("submit", () => {
    for (const gameLevel of gameLevels) {
        if (gameLevel.checked) {
            document.body.innerHTML = `<h1 style="color:#fff;">Открыт уровень ${gameLevel.value}</h2>`;
            window.level = +gameLevel.value;
        }
    }
});
