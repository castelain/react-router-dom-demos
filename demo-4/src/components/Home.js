import React, { Component } from 'react';
import { Prompt } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Prompt when={ true }
                        message={(location) => 
                            `Are you sure that you want go to ${ location.pathname } page? `
                        }
                >
                </Prompt>
            </div>
        );
    }
}

export default Home;