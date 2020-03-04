import React from "react";
import App from "./_app"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";  

const view = ()=> (
    <Router>

    <Switch>
        <Route path="/">
            <div>Hello World!</div>
        </Route>
        
        <Route path="/teste">
            <div>Hello World!</div>
        </Route>
    </Switch>
    </Router>
)

App(view)