import {colors, dummyCoverBook, getDummyCoverImg, getRandomColor} from "./function";

describe("function utils", () => {
    it("getRandomColor", () => {
        const actualResult = getRandomColor();
        expect(colors.includes(actualResult)).toBeTruthy()
    })

    it("getDummyCoverImg", () => {
        const actualResult = getDummyCoverImg();
        expect(dummyCoverBook.includes(actualResult)).toBeTruthy()
    })
})
