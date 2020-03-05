import React from "react";
import App from "./_app"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";  
import Layout from "./views/layout";  
import Home  from "./views/home"

const view = ()=> (
    <Router>
        <Switch>
            <Route path="/">
                {Layout(<Home/>)}
            </Route>
        </Switch>
    </Router>
)

App(view)