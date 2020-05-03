import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavStatesProvider } from "./Header/Navigation/NavStatesContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Header from "./Header";

function App() {
	document.title = "It's Daniel Torres";

	return (
		<NavStatesProvider>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/:website/" exact component={Home} />
						<Route path="/:website/about" component={About} />
						<Route path="/:website/projects" component={Projects} />
					</Switch>
				</div>
			</BrowserRouter>
		</NavStatesProvider>
	);
}

export default App;
