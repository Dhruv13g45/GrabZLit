import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        products: [
            {
                productImage: "",
                productTitle: "",
                productId: "",
            }
        ]
    },
    reducers: {
        addProductInWishList: (state, action) => {
            const { productImage, productTitle, productId } = action.payload || {}

            if (productImage && productTitle && productId) {
                state.products.push({ productImage, productTitle, productId })
            }
            console.log(state.products)
        },
        removeProductInWishList: (state, action) => {
            const { productId } = action.payload || {}

            if (productId) {
                state.products = state.products.filter((product) => (product.productId !== productId))
            }
            console.log(state.products)
        }
    }
})

export const { addProductInWishList, removeProductInWishList } = wishListSlice.actions
export default wishListSlice.reducer