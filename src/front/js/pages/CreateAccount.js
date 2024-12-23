import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/CreateAccount.css";
import { Link, useNavigate } from "react-router-dom";

export const CreateAccount = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const[data,setData] = useState({
        "first_name" : "",
        "last_name":"",
        "birth_date":"",
        "email" : "",
        "password" : ""
    })
    const handleChangeRegister = (e)=>{
		const{name,value} = e.target
		setData(prevData =>({
        ...prevData,[name]:value

		}))
	}
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const result = await actions.register(data.first_name, data.last_name, data.birth_date, data.email, data.password);
            if (result) {
                navigate("/"); 
            }
        } catch (error) {
            console.error("Error registering user", error);
        }
    };
    

    return (
           <div>
             <Link to={"/"}><h1>Home</h1></Link>
            <form className="form" onSubmit={handleRegister}>
                <h3>Create new user</h3>
                <div className="name">
                    <span className="input-span">
                    <label htmlFor="first name" className="label">first name </label>
                    <input type="text" name="first_name" id="first name" value={data.first_name} onChange={handleChangeRegister}
                    /></span>
                <span className="input-span">
                    <label htmlFor="last name" className="label">last name</label>
                    <input type="text" name="last_name" id="last name" value={data.last_name} onChange={handleChangeRegister}
                    /></span>
                </div>
                <div className="email-password-container">
                   <span className="input-span">
                    <label htmlFor="email" className="label">email</label>
                    <input type="email" name="email" id="email" value={data.email} onChange={handleChangeRegister}
                    /></span>
                <span className="input-span">
                    <label htmlFor="password" className="label">password</label>
                    <input type="password" name="password" id="password" value={data.password} onChange={handleChangeRegister}
                    /></span> 
                </div>
                
                <span className="input-span">
                    <label htmlFor="birth_date" className="label">Birthdate</label>
                    <input type="date" name="birth_date" id="birth_date" value={data.birth_date} onChange={handleChangeRegister}
                    /></span>
                <input className="submit" type="submit" value="create account" />
            </form>
           </div>
           
         
             
          
        
    );
};
