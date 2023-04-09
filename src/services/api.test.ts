import axios from "axios";

import {getBooks} from "./api";

jest.mock("axios")

describe("api", () => {
    it("should return api for getBooks", () => {
        const mockGet = jest.fn()
        const mockParams = { page: 2, limit: 5 }
        const expectedUrl = `http://openlibrary.org/subjects/adventure.json?limit=${mockParams.limit}&offset=5`

        axios.get.mockImplementation(mockGet)
        getBooks(mockParams)

        expect(mockGet).toHaveBeenCalledWith(expectedUrl)
    })
})
