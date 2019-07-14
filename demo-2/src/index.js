import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexRouter from './router/index-router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import Store from './store/index-store';
import { configure } from 'mobx';

ReactDOM.render(
    <Provider Store={ Store }>
        <IndexRouter />
    </Provider>, 
    document.getElementById('root')
);

configure({
    enforceActions: 'observed'
})

serviceWorker.unregister();
