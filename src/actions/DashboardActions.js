import * as types from './ActionTypes';

//Select Row
export const setNewEditRow = dispatch => row => {
    dispatch({ type: types.DASHBOARD_SET_EDIT_ROW, row })
};

//On Change
export const onChange = dispatch => e => {
    const {name, value} = e.target;
    dispatch(dashboardRowChanged({ name, value }));
    dispatch(findAndUpdateRow({ name, value }));
};

export const dashboardRowChanged = ({ name, value }) => {
    return { type: types.DASHBOARD_CHANGE_ROW_VALUE, name, value }
};

export const findAndUpdateRow = ({name, value}) => (dispatch, getState) => {
    const state = getState();
    const { displaying, row: { id } } = state.dashboard;
    const rows = state[displaying];

    const updatedRows = rows.map(row => row.id === id ? { ...row, [name]: value } : row);
    dispatch(updatedDisplayRows({ displaying, rows: updatedRows }))
};

export const updatedDisplayRows = ({ displaying, rows }) => {
    return { type: `${displaying.toUpperCase()}_ROWS_UPDATED`, rows }
};

//Change Content Shown
export const changeDisplayed = dispatch => e => {
    const { name } = e.target;
    dispatch({ type: types.DASHBOARD_DISPLAY_CHANGED, name })
};

//Change Page
export const changeDisplayedPage = dispatch => displaying => {
    dispatch({ type: types.DASHBOARD_CHANGE_PAGE, displaying })
};