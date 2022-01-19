import React from 'react'
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import style from "./ProductsList.module.scss"
import ProductDetailsItem from "./ProductDetailsItem"
import Container from "../UI/Container"

export default function ProductDetailsList() {
	const productsData = useSelector(state => state.products.data);

	const params = useParams();

	const details = productsData.find(item => item.id === params.productId)

	return (
		<Container className={style.container}>		
			<ul className={style.list}>
				<ProductDetailsItem
					id={details.id}
					title={details.title}
					price={details.price}
					image={details.image}
					description={details.description}
				/>
			</ul>
		</Container>
	)
}