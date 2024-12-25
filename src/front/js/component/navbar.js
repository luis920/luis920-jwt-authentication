import React, {useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation,useNavigate } from "react-router-dom";


export const Navbar = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const location = useLocation();
	

	const handleLogout = () => {
        actions.logout()
		navigate("/"); 
    };
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{location.pathname === "/profile/user" ? (
				  
				   <button className="btn" onClick={handleLogout}>
						Logout
					</button>
		
					
				) : (
					<>
						{location.pathname === "/" && (
							<div className="btn-container">
								<Link to="/login">
									<button className="btn">Login</button>
								</Link>
								<Link to="/createaccount">
									<button className="btn">Create Account</button>
								</Link>
							</div>
						)}
						{(location.pathname === "/login" || location.pathname === "/createaccount") && (
							< Link to="/">
								<button className="btn">Home</button>
							</Link>
						)}

					</>
				)}

			</div>
		</nav >
	);
};
