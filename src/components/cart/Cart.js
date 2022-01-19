import React from 'react'
import style from "./Cart.module.scss"
import Container from "../UI/Container"
import CartList from "./CartList"

export default function Cart() {
	return (
		<Container className={style.container}>
			<CartList />
		</Container>
	) 
}