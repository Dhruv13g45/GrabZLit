import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./slices/reviewSlice"
import wishListReducer from "./slices/wishListSlice"

export const store = configureStore({
    reducer: {
        reviews: reviewReducer,
        wishList: wishListReducer,
    }
})