import React from 'react'
import style from "./Footer.module.scss"
import Container from "../UI/Container"

export default function Footer() {
	return (
		<footer className={style.footer}>
			<Container className={style.container}>
				<h1>e-commerce</h1>
				<p>development by ali hussein (;</p>
			</Container>
		</footer>
	)
}