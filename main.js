const gameLevels = document.querySelectorAll(".radio-input");
const btnStart = document.querySelector(".btn-start");

btnStart.addEventListener("click", () => {
  for (const gameLevel of gameLevels) {
    if (gameLevel.checked) {
      localStorage.setItem('level', gameLevel.value);
      document.body.innerHTML = `<h1 style="color:#fff;">Открыт уровень ${gameLevel.value}</h2>`;
    } 
  }
});
