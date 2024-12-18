import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/CreateAccount.css";

export const CreateAccount = () => {
    const { store, actions } = useContext(Context);

    return (
           
            
            <form className="form">
                <h3>Create new user</h3>
                <div className="name">
                    <span className="input-span">
                    <label for="first name" className="label">first name </label>
                    <input type="text" name="first name" id="first name"
                    /></span>
                <span className="input-span">
                    <label for="last name" className="label">last name</label>
                    <input type="text" name="last name" id="last name"
                    /></span>
                </div>
                <div className="email-password-container">
                   <span className="input-span">
                    <label for="email" className="label">email</label>
                    <input type="email" name="email" id="email"
                    /></span>
                <span className="input-span">
                    <label for="email" className="label">password</label>
                    <input type="password" name="email" id="email"
                    /></span> 
                </div>
                
                <span className="input-span">
                    <label for="password" className="label">Birthdate</label>
                    <input type="date" name="password" id="password"
                    /></span>
                <input className="submit" type="submit" value="create account" />
            </form>
         
             

        
    );
};
