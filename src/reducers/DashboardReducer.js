import initialState from '../store/initialState';
import * as types from '../actions/ActionTypes';

const DashboardReducer = (state=initialState.dashboard, action) => {
    switch (action.type) {
        case types.DASHBOARD_SET_EDIT_ROW:
            return { ...state, row: action.row };
        case types.DASHBOARD_CHANGE_ROW_VALUE:
            return { ...state, row: { ...state.row, [action.name]: action.value } };
        case types.DASHBOARD_CHANGE_PAGE:
            return { ...state, displaying: action.displaying };
        default:
            return state
    }
};

export default DashboardReducer