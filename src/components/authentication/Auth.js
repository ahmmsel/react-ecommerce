import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../store/auth-slice"
import style from "./Auth.module.scss"
import Container from "../UI/Container"
import Card from "../UI/Card"
import Button from "../UI/Button"

export default function Auth() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");

	const dispatch = useDispatch();

	const history = useHistory();

	const loginHandler = (e) => {
		e.preventDefault();
		if (enteredEmail.trim().length === 0 || enteredPassword.trim().length == 0) {
			return;
		} else {
			dispatch(login());
			history.push("/");
		}
	}

	return (
		<section className={style.login}>
			<Container className={style.container}>
				<Card className={style.card}>
					<form onSubmit={loginHandler}>
		       <label htmlFor="email">email</label>
		       <input 
			       id="email" 
			       type="email" 
			       name="email" 
			       placeholder="Your last email.." 
			       onChange={e => setEnteredEmail(e.target.value)}
		       />

		       <label htmlFor="password">password</label>
		       <input 
			       id="password" 
			       type="password" 
			       name="password" 
			       placeholder="Your last password.." 
 			       onChange={e => setEnteredPassword(e.target.value)}
		       />

		       <Button className={style["login-btn"]} type="submit">login</Button>
		      </form>
				</Card>
			</Container>
		</section>
	)
}