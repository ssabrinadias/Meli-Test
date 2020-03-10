import React from "react";
import App from "./_app";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Catalog from "./views/Catalog";
import Product from "./views/Product";

const view = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/items" component={Catalog} />
				<Route exact path="/items/:id" component={Product} />
			</Switch>
		</Router>
	);
};

App(view);
