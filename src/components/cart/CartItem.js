import React from 'react'
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../store/cart-slice"
import style from "./CartItem.module.scss"
import Card from "../UI/Card"
import Button from "../UI/Button"

export default function CartItem({id, title, image, price, totalPrice, quantity}) {
	const dispatch = useDispatch();

	const removeFromCartHandler = () => dispatch(removeFromCart({id: id}));

	const addToCartHandler = () => dispatch(addToCart({id: id}));

	return (
		<li className={style["cart-item"]}>
			<Card className={style.card}>
				<img src={image} alt={title} className={style.image} />
				<div className={style.content}>
					<div className={style.info}>
						<h1>{title}</h1>
						<h2>${totalPrice}</h2>
					</div>
					<div className={style.actions}>
						<Button className={style["decrement-btn"]} onClick={removeFromCartHandler}>-</Button>
						<h2>x{quantity}</h2>
						<Button className={style["increment-btn"]} onClick={addToCartHandler}>+</Button>						
					</div>
				</div>
			</Card>
		</li>
	)
}