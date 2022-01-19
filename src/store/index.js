import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./products-slice"
import cartSlice from "./cart-slice"
import authSlice from "./auth-slice"

const sotre = configureStore({
	reducer: {
		products: productsSlice.reducer,
		cart: cartSlice.reducer,
		auth: authSlice.reducer
	}
})

export default sotre