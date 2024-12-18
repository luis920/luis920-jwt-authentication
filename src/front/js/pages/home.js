import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		   
			
			<form className="form">
				<h3>Inicia sesion o registrate</h3>
				<span className="input-span">
					<label for="email" className="label">Email</label>
					<input type="email" name="email" id="email"
					/></span>
				<span className="input-span">
					<label for="password" className="label">Password</label>
					<input type="password" name="password" id="password"
					/></span>
				<input className="submit" type="submit" value="Log in" />
				<span className="span">No tienes una cuenta? <a href="/createAccount">crear cuenta</a></span>
			</form>
		 
		     

		
	);
};
