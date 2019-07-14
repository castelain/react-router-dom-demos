import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

class MyLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Route path={this.props.path} children={(props) => {
                console.log(props);
                return <li>
                    {props.match ? '>' : ''}
                    <Link to={this.props.path}>
                        {this.props.label}
                    </Link>
                </li>
            }}>

            </Route>
        );
    }
}

export default MyLink;