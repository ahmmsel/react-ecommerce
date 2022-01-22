import React from 'react'
import style from "./Footer.module.scss"
import Container from "../UI/Container"

export default function Footer() {
	return (
		<footer className={style.footer}>
			<Container className={style.container}>
				<h1 className={style["special-text"]}>e-commerce</h1>
				<ul className={style["icons"]}>
					<li className="bi bi-facebook"></li>
					<li className="bi bi-linkedin"></li>
					<li className="bi bi-whatsapp"></li>
					<li className="bi bi-instagram"></li>
				</ul>
			</Container>
		</footer>
	)
}