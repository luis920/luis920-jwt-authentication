import React, {  useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/Profile.css";
import { useNavigate,Link } from "react-router-dom";

export const Login = () => {
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
            if (result ) {
                navigate(`/profile/user`);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };
    

    return (
           
            <div>
                 <button className="btn-home" onClick={() => navigate("/")} >HOME</button>
                <form className="form" onSubmit={handleLogin}>
                <h1>Log in</h1>
                <span className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="email" id="email" value={dataLogin.email} onChange={handleChangeLogin}
                    /></span>
                <span className="input-span">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" id="password" value={dataLogin.password} onChange={handleChangeLogin}
                    /></span>
                <input className="submit" type="submit" value="Log in" />
                <span className="span">Don't have an account?  <a href="/createAccount">create an account</a></span>
            </form>
            </div>
            
          
    );
};
     