import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('Store')
@observer
class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const store = this.props.Store;
        return (
            <div>
            { store.getIsLogin? <div>你已经登录了，可以访问所有页面！</div> : <div>你还没有登录，不能访问私有页面！</div> }</div>
        );
    }
}
 
export default HomeContainer;