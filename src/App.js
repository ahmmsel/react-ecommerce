import React from 'react'
import { Switch, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import MyCart from "./pages/MyCart"
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails"
import NotFound from "./pages/NotFound"

export default function App() {
	const isAuth = useSelector(state => state.auth.isAuth);

	return (
		<Layout>
			<Switch>
				<Route path="/" exact> 
					<Home />
				</Route>
				{!isAuth && <Route path="/login">
					<Login />
				</Route>}
				<Route path="/my-cart">
					<MyCart />
				</Route>
				<Route path="/:productId">
					<ProductDetails />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	)
}