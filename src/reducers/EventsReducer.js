import initialState from '../store/initialState';
import * as types from '../actions/ActionTypes';

const EventsReducer = (state=initialState.events, action) => {
    switch (action.type) {
        case types.EVENTS_ROWS_UPDATED:
            return action.rows;
        default:
            return state
    }
};

export default EventsReducer