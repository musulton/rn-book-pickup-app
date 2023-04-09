import {renderHook, act} from "@testing-library/react-native";

import useBookDetails from "./useBookDetails";

describe("useBookDetails", () => {
    const mockDate = new Date(2023, 3, 1)

    beforeAll(() => {
        jest.useFakeTimers("modern");
        jest.setSystemTime(mockDate);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

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
