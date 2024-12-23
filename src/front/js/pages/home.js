import React, { useContext, useState } from "react";
import "../../styles/home.css";
import "../../styles/Profile.css";
import { Navbar } from '../component/navbar.js'
import "../../styles/NavbarHome.css";

export const Home = () => {

	return (
		<div>
			<Navbar />
			<div className="card-home">
				<div className="card-content-home">
					<p className="card-title-home">WELCOME!</p>
					<p className="card-para-home">
						To enjoy a complete experience please log in or register
					</p>
				</div>
			</div>
		</div>




	);
};
