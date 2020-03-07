import React from "react";
import App from "./_app"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";  
import Home  from "./views/Home"
import Catalog  from "./views/Catalog"

const view = ()=> (
    <Router>
        <Switch>
            <Route exactly path="/dddd">
                <Home/>
            </Route>
            <Route path="/items">
                <Catalog/>
            </Route>
        </Switch>
    </Router>
)

App(view)