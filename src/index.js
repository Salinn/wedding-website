//React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//Components
import App from './components/App';
import './assets/stylesheets/css/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
