const { it, describe } = require("@jest/globals");
const assert = require("assert").strict;
const { shuffle } = require("./help");

describe("shuffle()", () => {
    type GameCard = { [key: string]: string | number }[];
    it("should shuffle array of two object", () => {
        //Подготовка
        const gameCards: GameCard = [{ diamonds: 8 }, { hearts: 10 }];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.notDeepEqual(shuffleGameCards, gameCards);
    });

    it("should return nothing change because array has one object", () => {
        //Подготовка
        const gameCards: GameCard = [{ hearts: 8 }];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.deepEqual(shuffleGameCards, gameCards);
    });

    it("should return empty array", () => {
        //Подготовка
        const gameCards: GameCard = [];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.deepEqual(shuffleGameCards, gameCards);
    });

    it("should shuffle array of five object", () => {
        //Подготовка
        const gameCards: GameCard = [
            { diamonds: 8 },
            { hearts: 6 },
            { crosses: 10 },
            { spades: "jack" },
            { hearts: "ace" },
        ];
        const shuffleGameCards = gameCards.slice(0);

        //Действие
        shuffle(shuffleGameCards);

        //Сверка
        assert.notDeepEqual(shuffleGameCards, gameCards);
    });
});
