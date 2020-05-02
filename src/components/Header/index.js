import React from "react";
import NavigationBar from "./Navigation";
import "./Header.css";

function Header() {
	return (
		<div className="Header">
			<h2 className="Title">It's Daniel Torres</h2>
			<NavigationBar />
		</div>
	);
}

export default Header;
