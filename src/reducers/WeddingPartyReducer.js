import initialState from '../store/initialState';
import * as types from '../actions/ActionTypes';

const WeddingPartyReducer = (state=initialState.weddingParty, action) => {
    switch (action.type) {
        default:
            return { ...state}
    }
};

export default WeddingPartyReducer