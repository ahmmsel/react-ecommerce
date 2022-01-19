import React from 'react'
import style from "./Showcase.module.scss"

export default function Showcase() {
	return (
		<section className={style.showcase}>
			<div className={style.overlay}>
				<div className={style.content}>
					<h1>buy products online</h1>
					<p>
				    Lorem ipsum dolor sit amet consectetur adipisicing elit.	
					</p>
				</div>
			</div>
		</section>
	)
}