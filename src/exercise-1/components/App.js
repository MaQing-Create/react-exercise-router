import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../../pages/Home.js'
import MyProfile from '../../pages/MyProfile.js'
import About from '../../pages/About.js'
import Products from '../../pages/Products.js'
import Product from "../../pages/Product";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div className="header">
                        <NavLink className="link" activeClassName="active" to='/' exact>Home</NavLink>
                        <NavLink className="link" activeClassName="active" to='/products'>Products</NavLink>
                        <NavLink className="link" activeClassName="active" to='/my-profile'>My Profile</NavLink>
                        <NavLink className="link" activeClassName="active" to='/about-us'>About Us</NavLink>
                    </div>
                    <Switch>
                        <Route exact path='/my-profile' component={MyProfile}/>
                        <Route exact path='/Products' component={Products}/>
                        <Route exact path='/goods' component={Products}/>
                        <Route exact path='/about-us' component={About}/>
                        <Route exact path='/products/:id' component={Product}/>
                        <Route exact path='/' component={Home}/>
                        <Route path='*' component={Home}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
