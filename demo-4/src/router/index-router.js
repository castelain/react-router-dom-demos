import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/Not-Found';

class IndexRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route path='/home' component={ Home } exact></Route>
                    <Route path='/about' component={ About }></Route>
                    <Route component={ NotFound }></Route>
                </Switch>
            </Router>
        );
    }
}
 
export default IndexRouter;