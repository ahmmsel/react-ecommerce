import React from 'react'
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Cart from "../components/cart/Cart"

export default function MyCart() {
	const isAuth = useSelector(state => state.auth.isAuth);

	return <>{isAuth ? <Cart /> : <Redirect to="/login" />}</>
}