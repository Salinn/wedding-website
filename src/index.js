//React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//Components
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './assets/stylesheets/css/index.css';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
