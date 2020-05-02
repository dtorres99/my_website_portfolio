import React, { createContext, useState } from 'react';

export const NavStatesContext = createContext();

export const NavStatesProvider = props => {
	const [selected, setSelected] = useState({
		'Home': false,
		'About': false,
		'Projects': false,
	});
	
	return (
		<NavStatesContext.Provider value={[selected,setSelected]}>
			{props.children}
		</NavStatesContext.Provider>
	);
}