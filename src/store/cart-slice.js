import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
	name: "cart",
	initialState: { cartData: [], totalAmount: 0 },
	reducers: {
		addToCart(state, action) {
			const newItem = action.payload;
			const isExisting = state.cartData.find(item => item.id === newItem.id);
			
			state.totalAmount++;
			if (!isExisting) {
				state.cartData.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					image: newItem.image,
					totalPrice: newItem.price,
					quantity: 1
				})
			} else {
				isExisting.quantity++;
				isExisting.totalPrice += isExisting.price;
			}
		},

		removeFromCart(state, action) {
			const itemId = action.payload.id;
			const idIsExisting = state.cartData.find(item => item.id === itemId);
			state.totalAmount--;
			if (idIsExisting.quantity === 1) {
				state.cartData = state.cartData.filter(item => item.id !== itemId);
			} else {
				idIsExisting.quantity--;
				idIsExisting.totalPrice -= idIsExisting.price;
			}
		}
	}
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;