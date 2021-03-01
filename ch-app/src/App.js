import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header2 from "./component/Header2";
import Footer from "./component/Footer";

function App() {
	return (
		<BrowserRouter>
			<div id="wrap">
				<Header2 />
				<Switch>
					<Route exact path="/">
						11
					</Route>
					<Route path="/about">
						22
					</Route>
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;


