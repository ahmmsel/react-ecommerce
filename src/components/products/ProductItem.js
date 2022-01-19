import React from 'react'
import { useHistory, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../../store/cart-slice"
import style from "./ProductItem.module.scss"
import Container from "../UI/Container"
import Button from "../UI/Button"

export default function ProductItem({id, title, price, image}) {
	const history = useHistory();

	const isAuth = useSelector(state => state.auth.isAuth);

	const dispatch = useDispatch();

	const addToCartHandler = () => {
		if (isAuth) {
			dispatch(addToCart({id, title, price, image}))
		} else {
			history.push("/login")
		}
	}

	return (
		<li className={style["product-item"]}>
			<div className={style.content}>
				<div className={style.info}>
					<h1>{title}</h1>
					<h2>${price}</h2>
				</div>
				<div className={style.actions}>
					<Button className={style["add-cart"]} onClick={addToCartHandler}>add to cart</Button>
					<Link to={`/${id}`} className={style["more-details"]}>more details</Link>
				</div>	
			</div>
			<img src={image} alt={title} className={style.image} />
		</li>
	)
}