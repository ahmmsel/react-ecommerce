import React, { lazy, Suspense } from 'react'
import { Switch, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "./components/layout/Layout"
import Loading from "./components/UI/Loading"

const Home = lazy(_ => import("./pages/Home"));
const MyCart = lazy(_ => import("./pages/MyCart"));
const ProductDetails = lazy(_ => import("./pages/ProductDetails"));
const NotFound = lazy(_ => import("./pages/NotFound"));
const Login = lazy(_ => import("./pages/Login"));

export default function App() {
	const isAuth = useSelector(state => state.auth.isAuth);

	return (
		<Layout>
			<Suspense fallback={<Loading />}>	
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
			</Suspense>
		</Layout>
	)
}