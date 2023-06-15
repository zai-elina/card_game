export const shuffle = (array: { [key: string]: string | number }[]) => {
    let currentIndex = array.length,
        randomIndex;

    if (array.length === 2) {
        [array[0], array[1]] = [array[1], array[0]];
        return array;
    }

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};
