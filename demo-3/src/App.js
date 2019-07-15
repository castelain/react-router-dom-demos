import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MyLink from './components/My-Link';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <div>
                    <ul>
                        <MyLink  exact={true} label='home' path='/home'></MyLink>
                        <MyLink label='about' path='/about'></MyLink>
                    </ul>
                    <Route path='/home' component={ Home }></Route>
                    <Route path='/about' component={ About }></Route>
                </div>
            </Router>
        );
    }
}
 
export default App;