import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../store/auth-slice"
import style from "./Navbar.module.scss"
import Button from "../UI/Button"

export default function Navbar() {
	const [toggle, setToggle] = useState(false);

	const totalAmount = useSelector(state => state.cart.totalAmount);

	const isAuth = useSelector(state => state.auth.isAuth);

	const dispatch = useDispatch();

	const logoutHandler = () => dispatch(logout());

	const toggleMenuHandler = () => setToggle(!toggle);

	return (
		<nav className={style.navbar}>
			<i className={`${style.menu} bi bi-list`} onClick={toggleMenuHandler}></i>
			<ul className={`${style["nav-list"]} ${toggle && style.active} `}>
				<li>
					<NavLink activeClassName={style.active} to="/" exact>Home</NavLink>
				</li>
				<li>
					{isAuth ? <Button className={style["logout-btn"]} onClick={logoutHandler}>logout</Button> : 
					<NavLink activeClassName={style.active} to="/login">Login</NavLink>}
				</li>
			</ul>
			{isAuth && 
			<Link className={style["my-cart"]} to="/my-cart">
				<span className={`${style["cart-icon"]} bi bi-cart`}>
					<span className={style["cart-quantity"]}>
						{totalAmount}
					</span>
				</span>
			</Link>
			}
		</nav>
	)
}