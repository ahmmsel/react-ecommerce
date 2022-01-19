import React from 'react'
import { Link } from "react-router-dom"
import style from "./Header.module.scss"
import Container from "../UI/Container"
import Navbar from "./Navbar"

export default function Header() {
	return (
		<header className={style.header}>
			<div className={style["relative-header"]}>
				<Container className={style.container}>
					<div className={style.logo}>
						<h1>
							<Link to="/">
								react
							</Link>
						</h1>
					</div>
					<Navbar />
				</Container>
			</div>
		</header>
	)
}