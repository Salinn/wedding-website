//Redux
import { combineReducers } from 'redux';
//Reducers
import events from './EventsReducer';
import hotels from './HotelsReducer';
import weddingParty from './WeddingPartyReducer';
import activities from './ActivityReducer';
import photos from './PhotosReducer';

const rootReducer = combineReducers({
    events,
    hotels,
    weddingParty,
    activities,
    photos
});

export default rootReducer;