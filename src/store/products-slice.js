import { createSlice } from "@reduxjs/toolkit"
import productsData from "./productsData"

const productsSlice = createSlice({
	name: "products",
	initialState: { data: productsData },
	reducers: {

	}
})

export const {} = productsSlice.actions

export default productsSlice;