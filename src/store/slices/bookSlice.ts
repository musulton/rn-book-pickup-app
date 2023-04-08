import {AnyAction, createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {Book} from "../../types";

interface States {
    books: Array<Book>
}

const initialState: States = {
    books: []
}

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Book>): States => {
            const books = [...state.books]
            books.push(action.payload)

            return {
                ...state,
                books
            }
        }
    }
})

export const { add } = bookSlice.actions;
export default bookSlice;
