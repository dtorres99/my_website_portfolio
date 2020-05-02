import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavOptionsDisplay from "./NavOptionsDisplay";
import { NavStatesContext } from "./NavStatesContext";

function NavOptions({ name }) {
	const [selected, setSelected] = useContext(NavStatesContext);
	const [location, setLocation] = useState(window.location.href.split("/")[3]);

	const updateStates = () => {
		switch (location.toLowerCase()) {
			case "":
			case "home":
				setSelected({
					Home: true,
					About: false,
					Projects: false
				});
				break;
			case "about":
				setSelected({
					Home: false,
					About: true,
					Projects: false
				});
				break;
			case "projects":
				setSelected({
					Home: false,
					About: false,
					Projects: true
				});
				break;
			default:
				setSelected({
					Home: false,
					About: false,
					Projects: false
				});
		}
	};

	const updateLocation = e => {
		if (location === "") setLocation("Home");
		setLocation(name);
		updateStates();
	};

	useEffect(() => {
		updateLocation();
		updateStates();
	}, []);

	return (
		<Link
			className="NavLinks"
			to={name === "Home" ? "/" : `/${name}`}
			onClick={updateLocation}>
			<NavOptionsDisplay name={name} selected={selected[name]} />
		</Link>
	);
}

export default NavOptions;
