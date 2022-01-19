import React from 'react'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../../store/cart-slice"
import style from "./ProductDetailsItem.module.scss"
import Button from "../UI/Button"

export default function ProductDetailsItem({id, title, price, image, description}) {
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
					<p>{description}</p>
				</div>
				<div className={style.actions}>
					<Button className={style["add-cart"]} onClick={addToCartHandler}>add to cart</Button>
				</div>	
			</div>
			<img src={image} alt={title} className={style.image} />
	 </li>		
	)
}