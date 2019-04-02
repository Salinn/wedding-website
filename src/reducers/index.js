//Redux
import { combineReducers } from 'redux';
//Reducers
import events from './EventsReducer';
import hotels from './HotelsReducer';
import home from './HomeReducer';
import weddingParty from './WeddingPartyReducer';
import activities from './ActivityReducer';
import photos from './PhotosReducer';
import tables from './TablesReducer';
import dashboard from './DashboardReducer';
import registries from './RegistryReducer';

const rootReducer = combineReducers({
    events,
    hotels,
    home,
    weddingParty,
    activities,
    photos,
    tables,
    dashboard,
    registries
});

export default rootReducer;