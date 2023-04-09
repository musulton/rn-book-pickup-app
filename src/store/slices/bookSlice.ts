import {AnyAction, createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {Book} from "../../types";
import Books from "../../screens/Books";

const initialState: Book[] = []

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Book>) => {
           state.push(action.payload)
        }
    }
})

export const { add } = bookSlice.actions;
export default bookSlice;
