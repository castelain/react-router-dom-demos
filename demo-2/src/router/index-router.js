import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PublicContainer from '../containers/public-container';
import PrivateContainer from '../containers/private-container';
import HomeContainer from '../containers/home-container';
import LoginBtn from '../components/Login-Btn';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer
class IndexRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
       
    }

    handleClick() {
        if (this.props.Store.getIsLogin) {
            alert('你已经登录了，可以访问这个私有页面！');
        }else{
            alert('你尚未登录，不可以访问这个私有页面！即将返回首页');
            window.location.href = '/';
            // this.props.history.push('/');
            // this.props.Store.dispatch(push('/foo'))
        }
    }

    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/public'>
                            公开页面
                        </Link>
                    </li>
                    <li>
                        <Link to='private' onClick={ this.handleClick }>
                            私有页面
                        </Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route path='/' component={HomeContainer} exact></Route>
                    <Route path='/public' component={PublicContainer}></Route>
                    <Route path='/private' component={PrivateContainer}></Route>
                </Switch>
                <LoginBtn></LoginBtn>
            </Router>
        );
    }
}

export default IndexRouter;