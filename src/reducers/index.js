//Redux
import { combineReducers } from 'redux';
//Reducers
import weddingParty from './WeddingPartyReducer';

const rootReducer = combineReducers({
    weddingParty,
});

export default rootReducer;