import {configureStore} from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";

const store = configureStore({
    reducer: {
        books: bookSlice.reducer
    }
})

export default store
