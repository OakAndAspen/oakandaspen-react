import "App.css";
import "config/fa-brand.config";
import About from "pages/About";
import Blog from "pages/Blog";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Portfolio from "pages/Portfolio";
import Services from "pages/Services";
import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

export default class App extends React.Component {

    render() {
        return (
            <div id="App">
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to="/fr"/>
                        </Route>
                        <Route exact path='/:lang' component={Home}/>
                        <Route exact path='/:lang/portfolio' component={Portfolio}/>
                        <Route exact path='/:lang/services' component={Services}/>
                        <Route exact path='/:lang/blog' component={Blog}/>
                        <Route exact path='/:lang/about' component={About}/>
                        <Route exact path='/:lang/contact' component={Contact}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
