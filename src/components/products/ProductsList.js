import React from 'react'
import { useSelector } from "react-redux"
import style from "./ProductsList.module.scss"
import ProductItem from "./ProductItem"

export default function ProductsList() {
	const productsList = useSelector(state => state.products.data)
	return (
		<ul className={style["products-list"]}>
			{productsList.map(item => (
				<ProductItem 
					key={item.id}
					id={item.id}
					title={item.title}
					price={item.price}
					image={item.image}
				/>
			))}
		</ul>
	)
}