import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/App'
import Login from '../pages/Login'
import Home from '../pages/Home'

export default function Rrouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
            </Switch>
        </Router>
    )
}