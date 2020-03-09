import React from "react";
import App from "./_app"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";  
import Home  from "./views/Home"
import Catalog  from "./views/Catalog"
import Product  from "./views/Product"

const view = ()=> (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/items">
                <Catalog/>
            </Route>
            <Route exact path="/items/:id">
                <Product/>
            </Route>
        </Switch>
    </Router>
)

App(view)