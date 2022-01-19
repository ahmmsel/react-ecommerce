import React from 'react'
import { useSelector } from "react-redux"
import style from "./CartList.module.scss"
import CartItem from "./CartItem"

export default function CartList() {
	const cartData = useSelector(state => state.cart.cartData);

	const CartList = (<ul className={style.list}>
										{cartData.map(item => (
											<CartItem
												key={item.id}
												id={item.id}
												title={item.title}
												image={item.image}
												totalPrice={item.totalPrice}
												quantity={item.quantity}
											/>
										))
										}
									</ul>)

	const NotFound = <p>no products in cart</p>

	return (
		<>
			{cartData.length === 0 ? NotFound : CartList}
		</>
	)
}