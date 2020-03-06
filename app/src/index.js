import React from "react";
import App from "./_app"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";  
import Home  from "./views/Home"

const view = ()=> (
    <Router>
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
)

App(view)