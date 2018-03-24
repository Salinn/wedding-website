//Redux
import { combineReducers } from 'redux';
//Reducers
import events from './EventsReducer';
import hotels from './HotelsReducer';
import weddingParty from './WeddingPartyReducer';

const rootReducer = combineReducers({
    events,
    hotels,
    weddingParty,
});

export default rootReducer;