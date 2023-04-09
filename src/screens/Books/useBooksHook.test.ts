import React from "react";
import {cleanup, renderHook, waitFor} from "@testing-library/react-native";

import useFetch from "../../hooks/useFetch";

import useBooksHook from "./useBooksHook";

jest
    .mock("../../hooks/useFetch")
    .mock("../../utils/function", () => ({
        getDummyCoverImg: () => "img.jpg"
    }))

describe("useBooksHook", () => {
    const mockedData = {title: "title", authors: [{name: "author"}], "cover_edition_key": "edition"}

    beforeEach(() => {
        useFetch.mockReturnValue({
            data: {
                data: {
                    works: [mockedData]
                }
            },
            loading: true,
            error: false
        })
    })

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })

    it("should return data correctly",  () => {
        const {result} = renderHook(useBooksHook)
        const {getter} = result.current

        expect(getter.data).toEqual([{
            title: mockedData.title,
            author: mockedData.authors[0].name,
            edition: mockedData["cover_edition_key"],
            coverImg: "img.jpg"
        }])
    })

    it("should return state for loading, error and set current page", async () => {
        const {result} = renderHook(useBooksHook)

        await waitFor(() => {
            const {getter, setter} = result.current

            expect(getter.loading).toBe(true)
            expect(getter.error).toBe(false)

            expect(setter.currentPage).toEqual(expect.any(Function))
        })
    })

    it("should call set page state when current page is executed", async () => {
        let mockPage = 1
        const mockSetPage = jest.fn((page) => {
            mockPage = page
        })

        React.useState = jest.fn()
            .mockReturnValueOnce([mockPage, mockSetPage])
            .mockReturnValueOnce([[], jest.fn()])

        const {result} = renderHook(useBooksHook)
        const {setter} = result.current

        setter.currentPage(2)

        expect(mockSetPage).toHaveBeenCalledWith(2)
        expect(mockPage).toBe(2)

    })
})
