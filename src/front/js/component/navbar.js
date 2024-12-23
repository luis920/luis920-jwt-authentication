import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="btn-container">
					<Link to="/login">
						<button className="btn">Login</button>
					</Link>
					<Link to="/createaccount">
						<button className="btn ">Create account</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
