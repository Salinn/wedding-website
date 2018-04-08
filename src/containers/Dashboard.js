//Redux
import {connect} from 'react-redux';
//Components
import Dashboard from '../components/ Dashboard / Dashboard';

function mapStateToProps(state) {
    return {
        state: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)