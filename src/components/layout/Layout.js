import React from 'react'
import style from "./Layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children}) {
	return (
		<>
			<Header />
				<main className={style["main-content"]}>{children}</main>			
			<Footer />
		</>
	)
}