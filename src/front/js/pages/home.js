import React, {  useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/Profile.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
    const [dataLogin ,setDataLogin] = useState({
		"email":"",
		"password":""
	})

	const handleChangeLogin = (e)=>{
		const{name,value} = e.target
		setDataLogin(prevData =>({
        ...prevData,[name]:value

		}))
	}

	const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await actions.login( dataLogin.email, dataLogin.password);
            if (result) {
                navigate("/profile"); 
            }
        } catch (error) {
            console.error("Error registering user", error);
        }
    };


	return (
		   
			<div>
				
				<form className="form" onSubmit={handleLogin}>
				<h3>Inicia sesion o registrate</h3>
				<span className="input-span">
					<label htmlFor="email" className="label">Email</label>
					<input type="email" name="email" id="email" value={dataLogin.email} onChange={handleChangeLogin}
					/></span>
				<span className="input-span">
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" id="password" value={dataLogin.password} onChange={handleChangeLogin}
					/></span>
				<input className="submit" type="submit" value="Log in" />
				<span className="span">No tienes una cuenta? <a href="/createAccount">crear cuenta</a></span>
			</form>
			</div>
			
		  
	);
};
     