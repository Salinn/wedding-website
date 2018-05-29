import initialState from '../store/initialState';
import * as types from '../actions/ActionTypes';

const WeddingPartyReducer = (state=initialState.weddingParty, action) => {
    switch (action.type) {
        case types.WEDDING_PARTY_ROWS_UPDATED:
            return action.rows;
        default:
            return state
    }
};

export default WeddingPartyReducer