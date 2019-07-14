import React, { Component } from 'react';

class PrivateContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <h1>Private page</h1>
        );
    }
}

export default PrivateContainer;