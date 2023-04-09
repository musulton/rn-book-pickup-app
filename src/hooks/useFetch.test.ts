import {cleanup, renderHook, waitFor} from "@testing-library/react-native";

import useFetch from "./useFetch";

describe("useFetch", () => {
    const mockParams = { page: 1 }

    afterEach(() => {
        cleanup()
    })

    it("should return initial value", () => {
        const { result } = renderHook(() => useFetch(jest.fn(), mockParams))
        const {loading, error, data} = result.current

        expect(loading).toBe(true)
        expect(error).toBe(false)
        expect(data).toStrictEqual({})
    })

    it("should initially return true then false", async () => {
        const { result } = renderHook(() => useFetch(jest.fn(), mockParams))
        const { loading } = result.current

        expect(loading).toBe(true)

        await waitFor(() => {
            const {loading} = result.current

            expect(loading).toBe(false)
        })
    })

    it("should return data", async () => {
        const mockedData = [{ title: "test" }]
        const mockQuery = jest.fn().mockResolvedValue(mockedData)
        const { result } = renderHook(() => useFetch(mockQuery, mockParams))

        await waitFor(() => {
            expect(result.current).toEqual({
                error: false,
                loading: false,
                data: mockedData
            })
        })
    })

    it("should return true on error state when fail fetch data", async () => {
        const mockedError = new Error("mocked error");
        const mockQuery = jest.fn().mockRejectedValue(mockedError)
        const { result } = renderHook(() => useFetch(mockQuery, mockParams));

        await waitFor(() => {
            const { error } = result.current;
            expect(error).toBe(true);
        });
    });
})
