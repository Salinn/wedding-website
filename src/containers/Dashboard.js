//Redux
import {connect} from 'react-redux';
//Actions
import { setNewEditRow, onChange, changeDisplayed, changeDisplayedPage } from '../actions/DashboardActions';
//Components
import Dashboard from '../components/dashboard/Dashboard';

function mapStateToProps(state) {
    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewEditRow: setNewEditRow(dispatch),
        onChange: onChange(dispatch),
        changeDisplayed: changeDisplayed(dispatch),
        changeDisplayedPage: changeDisplayedPage(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)