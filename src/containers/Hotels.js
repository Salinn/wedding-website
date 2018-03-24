//Redux
import {connect} from 'react-redux';
//Components
import Hotels from '../components/hotels/Hotels';

function mapStateToProps(state) {
    return {
        hotels: state.hotels,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)