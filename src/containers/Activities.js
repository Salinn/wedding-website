//Redux
import {connect} from 'react-redux';
//Components
import Activities from '../components/activities/Activities';

function mapStateToProps(state) {
    return {
        activities: state.activities,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)