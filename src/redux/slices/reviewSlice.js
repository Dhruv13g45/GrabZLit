import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        nigga: [],
    },
    reducers: {
        addItems: (state, action) => {
            console.log(action.payload)
            try {

                const { review, category } = action.payload || {}

                if (review && category) {
                    state.nigga.push({ review, category })
                }
            }
            catch (error) {
                console.log("undefined values are pushed")
            }
        }
    }
})


export const { addItems } = reviewSlice.actions;
export default reviewSlice.reducer;