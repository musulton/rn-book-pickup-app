import {Book} from "../../types";
import {book} from "../../fixtures/testData";

import bookSlice , { add } from './bookSlice'

describe("bookSlice", () => {
    it('should return the initial state', () => {
        expect(bookSlice.reducer(undefined, { type: undefined })).toEqual([])
    })

    it('should handle a book being added to an empty list', () => {
        const payload = book
        const previousState: Book[] = []
        const actualResult = bookSlice.reducer(previousState, add(payload))

        expect(actualResult).toEqual([payload])
    })
})
