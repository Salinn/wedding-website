import rootReducer from '../reducers';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(),
    );
}