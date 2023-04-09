import {renderHook, act} from "@testing-library/react-native";

import useBookDetails from "./useBookDetails";

const mockDate = new Date("25-04-1995")
jest
    .mock("../../utils/function", () => ({
        getTomorrowDate: () => mockDate
    }))

describe("useBookDetails", () => {
    it("should return data with getter and setter correctly", () => {
        const { result } = renderHook(useBookDetails)
        const {getter, setter} = result.current

        expect(getter.selectedDate).toStrictEqual(mockDate);
        expect(getter.datePickerVisible).toBe(false);

        expect(setter.selectedDate).toEqual(expect.any(Function));
        expect(setter.datePickerVisible).toEqual(expect.any(Function));
    });

    it("should update getter datePickerVisible when calls setter datePickerVisible", async () => {
        const {result} = renderHook(useBookDetails);

        act(() => {
            result.current.setter.datePickerVisible(true)
        })

        expect(result.current.getter.datePickerVisible).toBe(true);
    })
})
