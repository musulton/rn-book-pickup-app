import {colors, dummyCoverBook, getDummyCoverImg, getRandomColor, getTomorrowDate} from "./function";

describe("function utils", () => {
    const mockDate = new Date(2023, 3, 1)

    beforeAll(() => {
        jest.useFakeTimers("modern");
        jest.setSystemTime(mockDate);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it("getRandomColor", () => {
        const actualResult = getRandomColor();
        expect(colors.includes(actualResult)).toBeTruthy()
    })

    it("getDummyCoverImg", () => {
        const actualResult = getDummyCoverImg();
        expect(dummyCoverBook.includes(actualResult)).toBeTruthy()
    })

    it("getTomorrowDate", () => {
        const actualResult = getTomorrowDate();
        expect(actualResult).toStrictEqual(new Date("2023-04-01T17:00:00.000Z"))
    })
})
