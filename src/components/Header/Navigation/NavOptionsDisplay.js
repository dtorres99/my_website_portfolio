import React from "react";

function NavOptionsDisplay({ name, selected }) {
	return (
		<h1 className={selected ? "NavOptionsSelected" : "NavOptions"}>{name}</h1>
	);
}

export default NavOptionsDisplay;
