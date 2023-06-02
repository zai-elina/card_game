const { it, describe } = require("@jest/globals");
const assert = require("assert").strict;
const { shuffle } = require("./help");

describe("shuffle()", () => {
    it("should shuffle array of two object", () => {
        //Подготовка
        const gameCards: { [key: string]: string | number }[] = [
            { пики: 8 },
            { черви: 10 },
        ];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.notDeepEqual(shuffleGameCards, gameCards);
    });

    it("should return nothing change because array has one object", () => {
        //Подготовка
        const gameCards: { [key: string]: string | number }[] = [{ пики: 8 }];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.deepEqual(shuffleGameCards, gameCards);
    });

    it("should return empty array", () => {
        //Подготовка
        const gameCards: { [key: string]: string | number }[] = [];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.deepEqual(shuffleGameCards, gameCards);
    });

    it("should shuffle array of five object", () => {
        //Подготовка
        const gameCards: { [key: string]: string | number }[] = [
            { пики: 8 },
            { черви: 6 },
            { бубны: 10 },
            { крести: "валет" },
            { черви: "туз" },
        ];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.notDeepEqual(shuffleGameCards, gameCards);
    });
});
