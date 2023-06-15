let timer = 0;
let timerInterval: ReturnType<typeof setTimeout>;

export function stopTimer(): number {
    const time = timer;
    timer = 0;
    clearInterval(timerInterval);
    return time;
}

export function startTimer(second: HTMLElement, minute: HTMLElement) {
    stopTimer();
    let secondVal = 0;
    let minuteVal = 0;
    timerInterval = setInterval(function () {
        timer += 1;
        secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
        minuteVal = Math.floor(timer / 60);
        second.innerHTML = String(
            secondVal < 10 ? "0" + secondVal.toString() : secondVal
        );
        minute.innerHTML = String(
            minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal
        );
    }, 1000);
}
