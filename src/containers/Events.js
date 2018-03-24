//Redux
import {connect} from 'react-redux';
//Components
import Events from '../components/events/Events';

function mapStateToProps(state) {
    return {
        events: state.events,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)