import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

@inject('Store')
@observer
class LoginBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText: '登录'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    static propsTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleClick() {
        this.props.Store.changeLoginStatus();
        if (this.props.Store.getIsLogin) {
            this.setState({
                btnText: '登出'
            })
        } else {
            this.setState({
                btnText: '登录'
            });
            console.log(this.props.location);
            if(this.props.location.pathname === '/private'){
                this.props.history.push('/');
                // history.push('/');
            }
            console.log(this.props);
        }
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.btnText}</button>
        );
    }
}

export default withRouter(LoginBtn);