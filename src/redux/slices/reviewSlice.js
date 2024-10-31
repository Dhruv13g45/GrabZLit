import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: [
            {
                review: "Very Great Product",
                reviewProductCategory: "men's clothing",
            }
        ],
    },
    reducers: {
        addItems: (state, action) => {
            console.log(action.payload)
            try {

                const { review, reviewProductCategory } = action.payload || {}

                if (review && reviewProductCategory) {
                    state.reviews.push({ review, reviewProductCategory })
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