import React from "react";
import NavOptions from "./NavOptions";
import "./Navigation.css";

function NavigationBar({}) {
	console.log();
	return (
		<nav className="NavigationBar">
			<NavOptions name="Home" />
			<NavOptions name="About" />
			<NavOptions name="Projects" />
		</nav>
	);
}
export default NavigationBar;
